.. mxGraph Tutorial documentation master file, created by
   sphinx-quickstart on Thu Oct 24 15:08:42 2019.
   You can adapt this file completely to your liking, but it should at least
   contain the root `toctree` directive.

mxGraph Tutorial's documentation!
============================================

.. toctree::
    :glob:
    :maxdepth: 3
    :caption: Contents:
    :name: mastertoc

    editor/mxDefaultKeyHandler
    layout/mxCircleLayout
    helper/mxClient
    examples/*
    

.. glossary::

   term 1 : A
   term 2 : B
      Definition of both terms.

.. index::
   single: execution; context
   module: __main__
   module: sys
   triple: module; search; path

Overview
--------

This JavaScript library is divided into 8 packages.
The top-level `mxClient` class includes
(or dynamically imports) everything else.
The current version is stored in mxClient.VERSION.

The editor package provides the classes required to implement a diagram editor.  The main class in this package is mxEditor.


Indices and tables
==================

* :ref:`genindex`
* :ref:`modindex`
* :ref:`search`

.. https://jgraph.github.io/mxgraph/docs/js-api/files/index-txt.html
.. https://medium.com/@richdayandnight/a-simple-tutorial-on-how-to-document-your-python-project-using-sphinx-and-rinohtype-177c22a15b5b
.. http://dev.cs.ovgu.de/java/jgraph/tutorial/t1.html