<?php 

function cptui_register_my_cpts_emails() {

	/**
	 * Post Type: Emails.
	 */
	$labels = array(
		"name" => __( "Correos", "StRegis" ),
		"singular_name" => __( "Correo", "StRegis" ),
		"menu_name" => __( "Correos", "StRegis" ),
		"all_items" => __( "Todos los correos", "StRegis" ),
		"add_new" => __( "Agregar correo", "StRegis" ),
		"add_new_item" => __( "Añadir nuevo correo", "StRegis" ),
		"edit_item" => __( "Editar", "StRegis" ),
		"new_item" => __( "Nuevo", "StRegis" ),
		"view_item" => __( "Ver", "StRegis" ),
		"view_items" => __( "Ver", "StRegis" ),
		"search_items" => __( "Buscar", "StRegis" ),
		"not_found" => __( "No se encontró", "StRegis" ),
		"not_found_in_trash" => __( "No se encontro en la papelera", "StRegis" ),
		"featured_image" => __( "Imagen destacada", "StRegis" ),
		"set_featured_image" => __( "Establecer imagen destacada", "StRegis" ),
		"remove_featured_image" => __( "Remover imagen destacada", "StRegis" ),
		"use_featured_image" => __( "Utilizar como imagen destacada", "StRegis" ),
	);

	$args = array(
		"label" => __( "Correos", "StRegis" ),
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
		"rewrite" => array( "slug" => "email", "with_front" => true ),
		"query_var" => true,
		"menu_icon" => "dashicons-email-alt",
		"supports" => array( "title", "editor", "thumbnail", "custom-fields", "author" ),
		"show_in_graphql" => true,
		"hierarchical" => true,
		"graphql_single_name" => "email",
		"graphql_plural_name" => "emails",
	);

	register_post_type( "email", $args );
}

add_action( 'init', 'cptui_register_my_cpts_emails' );

?>