<!DOCTYPE html>
<html <?php language_attributes();?>>
<head>
<?php the_post(); $id = get_the_ID();?>
    <meta charset="<?php bloginfo('charset')?>">
    <meta name="viewport" content="width=device-width">

    <link rel="apple-touch-icon" sizes="180x180" href="<?php echo bloginfo('url'); ?>/favicon/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="<?php echo bloginfo('url'); ?>/favicon/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="<?php echo bloginfo('url'); ?>/favicon/favicon-16x16.png">
    <link rel="manifest" href="<?php echo bloginfo('url'); ?>/favicon/site.webmanifest">
    <link rel="mask-icon" href="<?php echo bloginfo('url'); ?>/favicon/safari-pinned-tab.svg" color="#f0a288">
    <link rel="shortcut icon" href="<?php echo bloginfo('url'); ?>/favicon/favicon.ico">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="msapplication-config" content="<?php echo bloginfo('url'); ?>/favicon/browserconfig.xml">
    <meta name="theme-color" content="#ffffff">
    
	<title><?php echo get_the_title() ?></title>
	<?php wp_head();?>
    <?php date_default_timezone_set("America/Mexico_City"); ?>

</head>
<body>
    <!-- MODALS -->
    <?php echo get_template_part('modals');?>
    <div id="fb-root"></div>
    <div class="alineador"></div>
    
    <!-- FIXED HEADER -->

<header>
    <?php get_template_part('navbar')?>
</header>
<div class="contenedor-main">