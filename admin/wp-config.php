<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'bd_stregis' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'vQ^lK$vST2|Kf:>r!<yD}Kn,qSg@12/l135?ou<,b-P;#-b<l,MSQ]i 5UU`2/;W' );
define( 'SECURE_AUTH_KEY',  'LKN<EGF_+/bPl$#afGm.v.LSmmqk;5hV%tp>>/Yw,y5p(97zYGF1alQlJir8Dkz6' );
define( 'LOGGED_IN_KEY',    '6Ta`]$QD)zv;b6gH-Zd4|eGI$9.ezRH.prr4z+:ne+?$oA/!sfV*MH0`Vjc:v|.L' );
define( 'NONCE_KEY',        'azWnxI9&TRToM+@xt%2!IdNBrrNb!+tNa69DNmxEm(iw3BoKI*NO6B$COZW-ai U' );
define( 'AUTH_SALT',        'aJWmRF$<ho(Gs<f|gvprW9%ndKlm|q^d6Z]TFeE[Fq(/Rhd[RV_l=s:!?A5Rs=Y<' );
define( 'SECURE_AUTH_SALT', 't +GRp[4RPIRu0MQa#kqGSZ&CECwgy}bse/7d;U<50D6sGH~I@%WYcU&t~vP)p#u' );
define( 'LOGGED_IN_SALT',   'OL5X*]As4+ShT.^n_P[[B5Y<#GE4^;{I_Ml8.Wm}!nm#+M5f<0`C;)g?IW7/tpVX' );
define( 'NONCE_SALT',       '%EquAlZ0ex}VtLn6m*V(x#&$c-%c5=1~x_LOd9KykId:]-!aZkubT:~dfta?K!]@' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_stregis';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
