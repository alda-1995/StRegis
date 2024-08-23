<?php
# Oculta Adminbar    
show_admin_bar(false);
# Add Thumbnails Support
add_theme_support('post-thumbnails');
# Remueve WP Version   
function wpbeginner_remove_version()
{
    return '';
}
add_filter('the_generator', 'wpbeginner_remove_version');


# Remueve Welcome Widget from the Dashboard
function remove_dashboard_widgets()
{
    remove_meta_box('dashboard_quick_press', 'dashboard', 'side');
    remove_meta_box('dashboard_incoming_links', 'dashboard', 'normal');
    remove_meta_box('dashboard_right_now', 'dashboard', 'normal');
    remove_meta_box('dashboard_activity', 'dashboard', 'normal');
    remove_meta_box('dashboard_plugins', 'dashboard', 'normal');
    remove_meta_box('dashboard_recent_drafts', 'dashboard', 'normal');
    remove_meta_box('dashboard_recent_comments', 'dashboard', 'normal');
    remove_meta_box('dashboard_primary', 'dashboard', 'side');
    remove_meta_box('dashboard_secondary', 'dashboard', 'side');
}
add_action('wp_dashboard_setup', 'remove_dashboard_widgets');
remove_action('welcome_panel', 'wp_welcome_panel');

# Agrega Canalla Plugin Styles
define('MY_CANALLA_PATH', get_stylesheet_directory() . '/assets/inc/plugins/canalla/');
define('MY_CANALLA_URL', get_stylesheet_directory_uri() . '/assets/inc/plugins/canalla/');
include_once(MY_CANALLA_PATH . 'admin-ui.php');
// Customize the url setting to fix incorrect asset URLs.
add_filter('canalla/settings/url', 'my_canalla_settings_url');
function my_canalla_settings_url()
{
    return MY_CANALLA_URL;
}

# Guarda y sincroniza ACF FILES
function my_acf_json_save_point($path)
{
    $path = get_stylesheet_directory() . '/assets/inc/acfCustom/';
    return $path;
}
add_filter('acf/settings/save_json', 'my_acf_json_save_point');
function my_acf_json_load_point($paths)
{
    unset($paths[0]);
    $paths[] = get_stylesheet_directory() . '/assets/inc/acfCustom/';
    return $paths;
}
add_filter('acf/settings/load_json', 'my_acf_json_load_point');
# Oculta elementos del menú START
add_action('admin_menu', 'remove_menu_elements');
function remove_menu_elements()
{
    $userData = wp_get_current_user();
    if ($userData->data->user_login != 'AdminTI') {
        //remove_menu_page( 'index.php' );                  //Dashboard
        remove_menu_page('edit.php');                   //Posts
        // remove_menu_page('upload.php');                 //Media
        //remove_menu_page( 'edit.php?post_type=page' );    //Pages
        remove_menu_page('edit-comments.php');          //Comments
        remove_menu_page('themes.php');                 //Appearance
        remove_menu_page('plugins.php');                //Plugins
        //remove_menu_page('users.php');                  //Users
        remove_menu_page('tools.php');                  //Tools
        // remove_menu_page( 'profile.php' );                  //Profile
        remove_menu_page( 'options-general.php' );        //Settings

    }
    if ($userData->data->user_login != 'AdminTI') {
        //Oculta custom fields
        add_filter('acf/settings/show_admin', '__return_false');
    }
}


# Desabilita gutenberg
add_filter('use_block_editor_for_post_type', '__return_false', 100);
# Remueve elementos de post
function remove_elements_support()
{
    // remove_post_type_support( 'post', 'editor' );
    remove_post_type_support('page', 'editor');
    remove_post_type_support('producto', 'editor');
    remove_post_type_support('email', 'editor');
    // remove_post_type_support( 'place', 'editor' ); //En un custom postype

    // ‘title’
    // ‘editor’ (content)
    // ‘author’
    // ‘thumbnail’ (featured image) (current theme must also support Post Thumbnails)
    // ‘excerpt’
    // ‘trackbacks’
    // ‘custom-fields’
    // ‘comments’ (also will see comment count balloon on edit screen)
    // ‘revisions’ (will store revisions)
    // ‘page-attributes’ (template and menu order) (hierarchical must be true)
    // ‘post-formats’ removes post formats, see Post Formats
}
add_action('init', 'remove_elements_support', 100);

# Ejemplo de Pagina de opciones     
// require('assets/inc/acf/option-page/settings.php');
# Ejemplo de CPT
include 'assets/inc/cpt/emails.php';
include 'assets/inc/cpt/restaurantes.php';
include 'assets/inc/cpt/clases-tasting.php';

# Permite retornar mas entradas en un query
add_filter('graphql_connection_max_query_amount', function ($amount, $source, $args, $context, $info) {
    $amount = 1000; // whatever you want the limit to be, in this case 1000.
    return $amount;
}, 10, 5);
# SAVE EMAIL IN CPT
function save_email_cpt($parameters)
{
    try {
        date_default_timezone_set("America/Mexico_City");
        $fecha = date("Y-m-d H:i:s");
        //code insert
        global $user_ID;
        $new_post = array(
            'post_title' => "Correo de " . $parameters["name"] . " - " . $fecha,
            'post_status' => 'publish',
            'post_date' => $fecha,
            'post_author' => $user_ID,
            'post_type' => 'email'
        );
        $post_id = wp_insert_post($new_post);
        if ($post_id) {
            update_field('asunto', $parameters["subject"], $post_id);
            update_field('correo', $parameters["email"], $post_id);
            update_field('telefono', $parameters["phone"], $post_id);
            update_field('mensaje', $parameters["message"], $post_id);
        }
        return true;
    } catch (\Throwable $th) {
        return false;
    }
}

# SEND MAIL
function sendMail($parameters)
{
    $formularioCorreos = get_field("correos_electronicos", 222);
    $correos = [];
    foreach ($formularioCorreos as $key => $value) {
        array_push($correos, $value["correo"]);
    }
    try {
        $payload = json_encode($parameters);
        $url = get_template_directory_uri() . '/mailtpl.php';
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $payload);
        curl_setopt($ch, CURLOPT_USERAGENT, $_SERVER['HTTP_USER_AGENT']);
        curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type:application/json'));
        curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 5);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        $contents = curl_exec($ch);
        if (curl_errno($ch)) {
            echo curl_error($ch);
            echo "\n<br />";
            $contents = '';
        } else {
            curl_close($ch);
        }

        if (!is_string($contents) || !strlen($contents)) {
            // echo "Failed to get contents.";
            $contents = '';
        }
        $to = $correos;
        $subject = 'STREGIS | Contacto';
        $body = $contents;
        $headers = array('Content-Type: text/html; charset=UTF-8');
        $result = wp_mail($to, $subject, $body, $headers);
        return $result;
    } catch (\Throwable $th) {
        return false;
    }
}
# API MAIL
function pluginname_get_post_items($request)
{
    $parameters = $request->get_params();
    if (save_email_cpt($parameters)) {
        if (sendMail($parameters)) {
            $resultado = array('code' => "success", 'message' => "El mensaje ha sido envidado exitosamente.");
            return $resultado;
        } else {
            $resultado = array('code' => "error", 'message' => "Algo salió mal, intenta de nuevo.");
            return $resultado;
        }
    } else {
        $resultado = array('code' => "error", 'message' => "Algo salió mal, intenta de nuevo.");
        return $resultado;
    }
}

function pluginname_register_api_endpoints()
{
    register_rest_route('wp/v2', '/mail', array(
        'methods' => 'POST',
        'callback' => 'pluginname_get_post_items',
    ));
}

add_action('rest_api_init', 'pluginname_register_api_endpoints');

