<?php 

function cptui_register_my_cpts_restaurantes() {

	/**
	 * Post Type: Restaurantes.
	 */
	$labels = array(
		"name" => __( "Restaurantes", "StRegis" ),
		"singular_name" => __( "Restaurante", "StRegis" ),
		"menu_name" => __( "Restaurantes", "StRegis" ),
		"all_items" => __( "Todos los restaurantes", "StRegis" ),
		"add_new" => __( "Agregar", "StRegis" ),
		"add_new_item" => __( "Añadir", "StRegis" ),
		"edit_item" => __( "Editar", "StRegis" ),
		"new_item" => __( "Nuevo", "StRegis" ),
		"view_item" => __( "Ver", "StRegis" ),
		"view_items" => __( "Ver todos", "StRegis" ),
		"search_items" => __( "Buscar", "StRegis" ),
		"not_found" => __( "No se encontró", "StRegis" ),
		"not_found_in_trash" => __( "No se encontro en la papelera", "StRegis" ),
		"featured_image" => __( "Imagen destacada", "StRegis" ),
		"set_featured_image" => __( "Establecer imagen destacada", "StRegis" ),
		"remove_featured_image" => __( "Remover imagen destacada", "StRegis" ),
		"use_featured_image" => __( "Utilizar como imagen destacada", "StRegis" ),
	);

	$args = array(
		"label" => __( "Restaurantes", "StRegis" ),
		"labels" => $labels,
		"description" => "",
		"public" => true,
		"publicly_queryable" => true,
		"show_ui" => true,
		"delete_with_user" => false,
		"show_in_rest" => true,
		"rest_base" => "",
		"rest_controller_class" => "WP_REST_Posts_Controller",
		"has_archive" => false,
		"show_in_menu" => true,
		"show_in_nav_menus" => true,
		"exclude_from_search" => false,
		"capability_type" => "post",
		"map_meta_cap" => true,
		"hierarchical" => true,
		"rewrite" => array( "slug" => "restaurante", "with_front" => true ),
		"query_var" => true,
		"menu_icon" => "dashicons-food",
		"supports" => array( "title", "custom-fields", "author" ),
		"show_in_graphql" => true,
		"hierarchical" => true,
		"graphql_single_name" => "restaurante",
		"graphql_plural_name" => "restaurantes",
		'taxonomies' => array( 'restaurantescat' ),
	);

	register_post_type( "restaurante", $args );
}

function registrar_taxonomia_personalizada() {
    // Etiquetas para la taxonomía
    $labels = array(
        'name'              => _x( 'Categorias', 'taxonomy general name' ),
        'singular_name'     => _x( 'Categorias', 'taxonomy singular name' ),
        'search_items'      => __( 'Buscar en categorias' ),
        'all_items'         => __( 'Todas las categorías' ),
        'parent_item'       => __( 'Categoría Padre' ),
        'parent_item_colon' => __( 'Categoría Padre:' ),
        'edit_item'         => __( 'Editar Categoría' ),
        'update_item'       => __( 'Actualizar Categoría' ),
        'add_new_item'      => __( 'Agregar Categoría' ),
        'new_item_name'     => __( 'Nombre de la Categoría' ),
        'menu_name'         => __( 'Categorias' ),
    );

    // Configuración de la taxonomía
    $args = array(
        'labels'            => $labels,
        'hierarchical'      => true, // Cambiar a false si quieres que sea no jerárquica
        'show_ui'           => true,
        'show_admin_column' => true,
        'query_var'         => true,
        'rewrite'           => array( 'slug' => 'restaurantescat' ), // Personaliza la URL aquí
		'show_in_graphql'   => true,
		"graphql_single_name" => "restaurantescat",
		"graphql_plural_name" => "restaurantescats",

    );

    // Registrar la taxonomía
    register_taxonomy( 'restaurantescat', array( 'restaurante' ), $args );
}
add_action( 'init', 'registrar_taxonomia_personalizada', 0 );

add_action( 'init', 'cptui_register_my_cpts_restaurantes' );



?>