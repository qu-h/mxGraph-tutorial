mxClient
========

.. toctree::
   :maxdepth: 3
   :caption: Welcome

Bootstrapping mechanism for the mxGraph thin client.
The production version of this file contains all code required to run the mxGraph thin client,
as well as global constants to identify the browser and operating system in use.
You may have to load ``chrome://global/content/contentAreaUtils.js`` in your page to disable certain security restrictions in Mozilla.


Summary
-------

=============== ====
Variables       
=============== ====
VERSION         Contains the current version of the mxGraph library.
IS_IE           True if the current browser is Internet Explorer 10 or below.
IS_IE6          True if the current browser is Internet Explorer 6.x.
IS_IE11	        True if the current browser is Internet Explorer 11.x.
IS_EDGE	        True if the current browser is Microsoft Edge.
IS_QUIRKS	    True if the current browser is Internet Explorer and it is in quirks mode.
IS_EM	        True if the browser is IE11 in enterprise mode (IE8 standards mode).
VML_PREFIX	    Prefix for VML namespace in node names.
OFFICE_PREFIX	Prefix for VML office namespace in node names.
IS_NS	        True if the current browser is Netscape (including Firefox).
IS_OP	        True if the current browser is Opera.
IS_OT	        True if -o-transform is available as a CSS style, ie for Opera browsers based on a Presto engine with version 2.5 or later.
IS_SF	        True if the current browser is Safari.
IS_IOS	        Returns true if the user agent is an iPad, iPhone or iPod.
IS_GC	        True if the current browser is Google Chrome.
IS_CHROMEAPP	True if the this is running inside a Chrome App.
IS_FF	        True if the current browser is Firefox.
IS_MT	        True if -moz-transform is available as a CSS style.
IS_VML	        True if the browser supports VML.
IS_SVG	        True if the browser supports SVG.
NO_FO	        True if foreignObject support is not available.
IS_WIN	        True if the client is a Windows.
IS_MAC	        True if the client is a Mac.
IS_CHROMEOS	    True if the client is a Chrome OS.
IS_TOUCH	    rue if this device supports touchstart/-move/-end events (Apple iOS, Android, Chromebook and Chrome Browser on touch-enabled devices).
IS_POINTER	    True if this device supports Microsoft pointer events (always false on Macs).
IS_LOCAL	    True if the documents location does not start with http:// or https://.
defaultBundles	Contains the base names of the default bundles if mxLoadResources is false.
=============== ====


Variables
---------

VERSION
.......

Contains the current version of the mxGraph library.  The strings that communicate versions of mxGraph use the following format.

versionMajor.versionMinor.buildNumber.revisionNumber

Current version is 4.0.5.

IS_IE
.....

.. code:: js

    IS_IE: navigator.userAgent.indexOf(	'MSIE'	) >

True if the current browser is Internet Explorer 10 or below.
Use mxClient.IS_IE11 to detect IE 11.


IS_IE6
......

.. code:: js

    IS_IE6: navigator.userAgent.indexOf('MSIE 6') >

True if the current browser is Internet Explorer 6.x.




