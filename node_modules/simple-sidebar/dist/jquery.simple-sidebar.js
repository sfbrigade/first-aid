/*! simple-sidebar v2.8.3 (https://github.com/dcdeiv/simple-sidebar)
** Copyright (c) 2014 - 2016 Davide Di Criscito
** Dual licensed under MIT and GPL-2.0
*/
( function( $ ) {

$.fn.simpleSidebar = function( options ) {
	var opts = $.extend( true, $.fn.simpleSidebar.settings, options );

	return this.each( function() {
		var pAlign, sAlign, ssbCSS, ssbStyle, maskCSS, maskStyle, sbw,
			attr = opts.attr,
			$sidebar = $( this ),
			$btn = $( opts.opener ),
			$wrapper = $( opts.wrapper ),
			$ignore = $( opts.ignore ),
			$add = $( opts.add ),
			$links = opts.sidebar.closingLinks,

			sbMaxW = opts.sidebar.width,
			gap = opts.sidebar.gap,
			winMaxW = sbMaxW + gap,

			w = $( window ).width(),

			duration = opts.animation.duration,

			animationStart = {},
			animationReset = {},
			sidebarStart = {},
			sidebarReset = {},

			hiddenFlow = function() {
				$( "body, html" ).css( "overflow", "hidden" );
			},
			autoFlow = function() {
				$( "body, html" ).css( "overflow", "auto" );
			},

			activate = {
				duration: duration,
				easing: opts.animation.easing,
				complete: hiddenFlow
			},
			deactivate = {
				duration: duration,
				easing: opts.animation.easing,
				complete: autoFlow
			},

			animateOpen = function() {
				$elements.animate( animationStart, activate );

				$sidebar.animate( sidebarStart, activate )
					.attr( "data-" + attr, "active" );

				$mask.fadeIn( duration );
			},
			animateClose = function() {
				$elements.animate( animationReset, deactivate );

				$sidebar.animate( sidebarReset, deactivate )
					.attr( "data-" + attr, "disabled" );

				$mask.fadeOut( duration );
			},
			closeSidebar = function() {
				var isWhat = $sidebar.attr( "data-" + attr ),
					csbw = $sidebar.width( );

				//Redefining animationReset
				animationReset[pAlign] = "-=" + csbw;
				animationReset[sAlign] = "+=" + csbw;
				sidebarReset[pAlign] = -csbw;

				if ( isWhat === "active" ) {

					$elements.not( $sidebar )
						.animate( animationReset, deactivate );

					$sidebar.animate( sidebarReset, deactivate )
						.attr( "data-" + attr, "disabled" );

					$mask.fadeOut( duration );
				}
			},

			$sbWrapper = $( "<div>" ).attr( "data-" + attr, "sbwrapper" )
				.css( opts.sbWrapper.css ),

			$mask = $( "<div>" ).attr( "data-" + attr, "mask" ),

			//defining elements to move
			$siblings = $wrapper.siblings().not( "script noscript" ),
			$elements = $wrapper.add( $siblings )
				.not( $ignore )
				.not( $sidebar )
				.not( $mask )
				.not( "script" )
				.not( "noscript" )
				.add( $add );

		//Checking sidebar align
		if ( [ undefined, "right" ].indexOf( opts.sidebar.align ) !== -1 ) {
			pAlign = "right";
			sAlign = "left";
		} else if ( opts.sidebar.align === "left" ) {
			pAlign = "left";
			sAlign = "right";
		}

		//Mask plugin style
		maskCSS = {
			position: "fixed",
			top: 0,
			right: 0,
			bottom: 0,
			left: 0,
			zIndex: opts.sidebar.css.zIndex - 1,
			display: "none"
		};
		maskStyle = $.extend( true, maskCSS, opts.mask.css );

		//Appending Mask if mask.display is true
		if ( true === opts.mask.display ) {
			$mask.appendTo( "body" )
				.css( maskStyle );
		}

		//Defining initial Sidebar width
		if ( w < winMaxW ) {
			sbw = w - gap;
		} else {
			sbw = sbMaxW;
		}

		//Sidebar plugin style
		ssbCSS = {
			position: "fixed",
			top: 0,
			bottom: 0,
			width: sbw
		};

		//Opening sidebar
		sidebarStart[pAlign] = 0;

		//pushing align to ssbCSS
		ssbCSS[pAlign] = -sbw;

		//Overriding user style
		ssbStyle = $.extend( true, ssbCSS, opts.sidebar.css );

		//Sidebar initial status
		$sidebar.css( ssbStyle )
			.attr( "data-" + attr, "disabled" );

		//Wrapping sidebar inner content if wrapInner.display is TRUE
		if ( true === opts.sbWrapper.display ) {
			$sidebar.wrapInner( $sbWrapper );
		}

		//Animating the sidebar
		$btn.click( function() {
			//Checking if sidebar is active or disabled
			var isWhat = $sidebar.attr( "data-" + attr ),
				csbw = $sidebar.width();

			//Defining animations
			animationStart[pAlign] = "+=" + csbw;
			animationStart[sAlign] = "-=" + csbw;
			animationReset[pAlign] = "-=" + csbw;
			animationReset[sAlign] = "+=" + csbw;
			sidebarReset[pAlign] = -csbw;

			if ( "disabled" === isWhat ) {
				animateOpen();
			} else if ( "active" === isWhat ) {
				animateClose();
			}
		} );

		//Closing Sidebar
		$mask.click( closeSidebar );

		//closing sidebar when a link is clicked
		$sidebar.on( "click", $links, closeSidebar );

		//Adjusting width and resetting sidebar on window resize
		$( window ).resize( function() {
			var rsbw,
				isWhat = $sidebar.attr( "data-" + attr ),
				nw = $( window ).width(),
				reset = {};

			if ( nw < winMaxW ) {
				rsbw = nw - gap;
			} else {
				rsbw = sbMaxW;
			}

			//Redefining animations ad CSS
			animationReset[pAlign] = "-=" + rsbw;
			animationReset[sAlign] = "+=" + rsbw;
			reset[pAlign] = -rsbw;
			reset[sAlign] = "";
			reset.width = rsbw;

			$sidebar.css( reset )
				.attr( "data-" + attr, "disabled" );

			if ( isWhat === "active" ) {

				$elements.not( $sidebar )
					.animate( animationReset, deactivate );

				$mask.fadeOut( duration );
			}
		} );
	} );
};

//options
$.fn.simpleSidebar.settings = {
	attr: "simplesidebar",
	animation: {
		duration: 500,
		easing: "swing"
	},
	sidebar: {
		width: 300,
		gap: 64,
		closingLinks: "a",
		css: {
			zIndex: 3000
		}
	},
	sbWrapper: {
		display: true,
		css: {
			position: "relative",
			height: "100%",
			overflowY: "auto",
			overflowX: "hidden"
		}
	},
	mask: {
		display: true,
		css: {
			backgroundColor: "black",
			opacity: 0.5,
			filter: "Alpha(opacity=50)"
		}
	},
};

} )( jQuery );
