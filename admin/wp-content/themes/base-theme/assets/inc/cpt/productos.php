<?php 

function cptui_register_my_cpts_productos() {

	/**
	 * Post Type: Productos.
	 */
	$labels = array(
		"name" => __( "Productos", "StRegis" ),
		"singular_name" => __( "Producto", "StRegis" ),
		"menu_name" => __( "Productos", "StRegis" ),
		"all_items" => __( "Todos los productos", "StRegis" ),
		"add_new" => __( "Agregar producto", "StRegis" ),
		"add_new_item" => __( "Añadir nuevo producto", "StRegis" ),
		"edit_item" => __( "Editar producto", "StRegis" ),
		"new_item" => __( "Nuevo producto", "StRegis" ),
		"view_item" => __( "Ver producto", "StRegis" ),
		"view_items" => __( "Ver producto", "StRegis" ),
		"search_items" => __( "Buscar producto", "StRegis" ),
		"not_found" => __( "No se encontró el producto", "StRegis" ),
		"not_found_in_trash" => __( "No se encontro en la papelera", "StRegis" ),
		"featured_image" => __( "Imagen destacada", "StRegis" ),
		"set_featured_image" => __( "Establecer imagen destacada", "StRegis" ),
		"remove_featured_image" => __( "Remover imagen destacada", "StRegis" ),
		"use_featured_image" => __( "Utilizar como imagen destacada", "StRegis" ),
	);

	$args = array(
		"label" => __( "Productos", "StRegis" ),
		"labels" => $labels,
		"description" => "",
		"public" => true,
		"publicly_queryable" => true,
		"show_ui" => true,
		"delete_with_user" => false,
		"show_in_rest" => false,
		"rest_base" => "",
		"rest_controller_class" => "WP_REST_Posts_Controller",
		"has_archive" => false,
		"show_in_menu" => true,
		"show_in_nav_menus" => true,
		"exclude_from_search" => false,
		"capability_type" => "post",
		"map_meta_cap" => true,
		"hierarchical" => false,
		"rewrite" => array( "slug" => "producto", "with_front" => true ),
		"query_var" => true,
		"menu_icon" => "dashicons-block-default",
		"supports" => array( "title", "editor", "thumbnail", "custom-fields", "author" ),
		"show_in_graphql" => true,
		"hierarchical" => true,
		"graphql_single_name" => "producto",
		"graphql_plural_name" => "productos",
		'taxonomies' => array( 'category' ),
	);

	register_post_type( "producto", $args );
}

function registrar_taxonomia_personalizada2() {
    // Etiquetas para la taxonomía
    $labels = array(
        'name'              => _x( 'Marcas', 'taxonomy general name' ),
        'singular_name'     => _x( 'Marca', 'taxonomy singular name' ),
        'search_items'      => __( 'Buscar en marcas' ),
        'all_items'         => __( 'Todas las marcas' ),
        'parent_item'       => __( 'Categoría Padre' ),
        'parent_item_colon' => __( 'Categoría Padre:' ),
        'edit_item'         => __( 'Editar Categoría' ),
        'update_item'       => __( 'Actualizar Categoría' ),
        'add_new_item'      => __( 'Agregar Categoría' ),
        'new_item_name'     => __( 'Nombre de la Categoría' ),
        'menu_name'         => __( 'Marcas' ),
    );

    // Configuración de la taxonomía
    $args = array(
        'labels'            => $labels,
        'hierarchical'      => true, // Cambiar a false si quieres que sea no jerárquica
        'show_ui'           => true,
        'show_admin_column' => true,
        'query_var'         => true,
        'rewrite'           => array( 'slug' => 'marca' ), // Personaliza la URL aquí
		'show_in_graphql'   => true,
		"graphql_single_name" => "marca",
		"graphql_plural_name" => "marcas",

    );

    // Registrar la taxonomía
    register_taxonomy( 'marca', array( 'producto' ), $args );
}
add_action( 'init', 'registrar_taxonomia_personalizada2', 0 );

add_action( 'init', 'cptui_register_my_cpts_productos' );

?>