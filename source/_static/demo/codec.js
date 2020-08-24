// Program starts here. Creates a sample graph in the
// DOM node with the specified ID. This function is invoked
// from the onLoad event handler of the document (see below).
function main(container)
{
    if (mxClient.isBrowserSupported())
    {
        var divs = document.getElementsByTagName('*');
        console.log("debug 1",divs)
        for (var i = 0; i < divs.length; i++)
        {
            if (divs[i].className.toString().indexOf('mxgraph') >= 0)
            {
                                
                container = divs[i];
                console.log("debug 2",container);
                (function(container)
                {
                    var xml = mxUtils.getTextContent(container);
                    var xmlDocument = mxUtils.parseXml(xml);
                    console.log("debug 3",xmlDocument);
                    if (xmlDocument.documentElement != null && xmlDocument.documentElement.nodeName == 'mxGraphModel')
                    {
                        var decoder = new mxCodec(xmlDocument);
                        var node = xmlDocument.documentElement;

                        container.innerHTML = '';

                        var graph = new mxGraph(container);
                        graph.centerZoom = false;
                        graph.setTooltips(false);
                        graph.setEnabled(false);
                        
                        // Changes the default style for edges "in-place"
                        var style = graph.getStylesheet().getDefaultEdgeStyle();
                        style[mxConstants.STYLE_EDGE] = mxEdgeStyle.ElbowConnector;
                        
                        // Enables panning with left mouse button
                        graph.panningHandler.useLeftButtonForPanning = true;
                        graph.panningHandler.ignoreCell = true;
                        graph.container.style.cursor = 'move';
                        graph.setPanning(true);
                        
                        if (divs[i].style.width == '' && divs[i].style.height == '')
                        {
                            graph.resizeContainer = true;
                        }
                        else
                        {
                            // Adds border for fixed size boxes
                            graph.border = 20;
                        }
                        
                        decoder.decode(node, graph.getModel());
                        graph.resizeContainer = false;
                        
                        // Adds zoom buttons in top, left corner
                        var buttons = document.createElement('div');
                        buttons.style.position = 'absolute';
                        buttons.style.overflow = 'visible';

                        var bs = graph.getBorderSizes();
                        buttons.style.top = (container.offsetTop + bs.y) + 'px';
                        buttons.style.left = (container.offsetLeft + bs.x) + 'px';
                        
                        var left = 0;
                        var bw = 16;
                        var bh = 16;
                        
                        if (mxClient.IS_QUIRKS)
                        {
                            bw -= 1;
                            bh -= 1;
                        }
                        
                        function addButton(label, funct)
                        {
                            var btn = document.createElement('div');
                            mxUtils.write(btn, label);
                            btn.style.position = 'absolute';
                            btn.style.backgroundColor = 'transparent';
                            btn.style.border = '1px solid gray';
                            btn.style.textAlign = 'center';
                            btn.style.fontSize = '10px';
                            btn.style.cursor = 'hand';
                            btn.style.width = bw + 'px';
                            btn.style.height = bh + 'px';
                            btn.style.left = left + 'px';
                            btn.style.top = '0px';
                            
                            mxEvent.addListener(btn, 'click', function(evt)
                            {
                                funct();
                                mxEvent.consume(evt);
                            });
                            
                            left += bw;
                            
                            buttons.appendChild(btn);
                        };
                        
                        addButton('+', function()
                        {
                            graph.zoomIn();
                        });
                        
                        addButton('-', function()
                        {
                            graph.zoomOut();
                        });
                        
                        if (container.nextSibling != null)
                        {
                            container.parentNode.insertBefore(buttons, container.nextSibling);
                        }
                        else
                        {
                            container.appendChild(buttons);
                        }
                    }
                })(divs[i]);
            }
        }
    }
};

let demo_area = $('.highlight-html-demo');

var div1 = document.createElement('div');
div1.classList.add('mxgraph');
div1.setAttribute("style","position:relative;overflow:auto;");
div1.innerHTML = '<mxGraphModel><root><mxCell id="0"/><mxCell id="1" parent="0"/><mxCell id="2" vertex="1" parent="1" value="Interval 1"><mxGeometry x="380" y="0" width="140" height="30" as="geometry"/></mxCell><mxCell id="3" vertex="1" parent="1" value="Interval 2"><mxGeometry x="200" y="80" width="380" height="30" as="geometry"/></mxCell><mxCell id="4" vertex="1" parent="1" value="Interval 3"><mxGeometry x="40" y="140" width="260" height="30" as="geometry"/></mxCell><mxCell id="5" vertex="1" parent="1" value="Interval 4"><mxGeometry x="120" y="200" width="240" height="30" as="geometry"/></mxCell><mxCell id="6" vertex="1" parent="1" value="Interval 5"><mxGeometry x="420" y="260" width="80" height="30" as="geometry"/></mxCell><mxCell id="7" edge="1" source="2" target="3" parent="1" value="Transfer1"><mxGeometry as="geometry"><Array as="points"><Object x="420" y="60"/></Array></mxGeometry></mxCell><mxCell id="8" edge="1" source="2" target="6" parent="1" value=""><mxGeometry as="geometry" relative="1" y="-30"><Array as="points"><Object x="600" y="60"/></Array></mxGeometry></mxCell><mxCell id="9" edge="1" source="3" target="4" parent="1" value="Transfer3"><mxGeometry as="geometry"><Array as="points"><Object x="260" y="120"/></Array></mxGeometry></mxCell><mxCell id="10" edge="1" source="4" target="5" parent="1" value="Transfer4"><mxGeometry as="geometry"><Array as="points"><Object x="200" y="180"/></Array></mxGeometry></mxCell><mxCell id="11" edge="1" source="4" target="6" parent="1" value="Transfer5"><mxGeometry as="geometry" relative="1" y="-10"><Array as="points"><Object x="460" y="155"/></Array></mxGeometry></mxCell></root></mxGraphModel>';
$(demo_area).append(div1);

main();