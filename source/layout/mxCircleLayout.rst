mxCircleLayout
==============

.. toctree::
   :maxdepth: 3
   :caption: Welcome

Extends ``mxGraphLayout`` to implement a circluar layout for a given radius.
The vertices do not need to be connected for this layout to work
and all connections between vertices are not taken into account.

Example

.. code:: javascript

    var layout = new mxCircleLayout(graph);
    layout.execute(graph.getDefaultParent());

Summary
-------


Functions
------------------------

.. code:: js

    function mxCircleLayout( graph, radius)

Constructs a new circular layout for the specified radius.

Arguments
.........

graph	mxGraph that contains the cells.
radius	Optional radius as an int.  Default is 100.


Variables
--------------

radius
......

.. code:: js

    mxCircleLayout.prototype.radius

Integer specifying the size of the radius.  Default is 100.

moveCircle
..........

.. code:: js

    mxCircleLayout.prototype.moveCircle

Boolean specifying if the circle should be moved to the top,
left corner specified by x0 and y0.  Default is false.

x0
..
.. code:: js

    mxCircleLayout.prototype.x0

Integer specifying the left coordinate of the circle.  Default is 0.

y0
..

.. code:: js

    mxCircleLayout.prototype.y0

Integer specifying the top coordinate of the circle.  Default is 0.

resetEdges
..........

.. code:: js

    mxCircleLayout.prototype.resetEdges

Specifies if all edge points of traversed edges should be removed.
Default is true.

disableEdgeStyle
................

.. code:: js
    mxCircleLayout.prototype.disableEdgeStyle

Specifies if the STYLE_NOEDGESTYLE flag should be set on edges that are modified by the result.  Default is true.


