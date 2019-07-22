// The default code is a module class (inherited from xui.Module)
// Ensure that all the value of "key/value pair" does not refer to external variables
xui.Class('App', 'xui.Module',{
    Instance:{
        // Dependency classes
        Dependencies:[],
        // Required modules
        Required:[],

        // To initialize properties
        properties : {},

        // To initialize instance(e.g. properties)
        initialize : function(){
        },

        // To initialize internal components (mostly UI controls)
        // *** If you're not a skilled, dont modify this function manually ***
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.UI.SVGPaper")
                .setHost(host,"xui_ui_svgpaper1")
                .setLeft("2.5em")
                .setTop("13.333333333333334em")
                .setWidth("28.666666666666668em")
                .setHeight("37.5em")
            );
            
            host.xui_ui_svgpaper1.append(
                xui.create("xui.svg.circle")
                .setHost(host,"xui_svg_circle1")
                .setSvgTag("Shapes:Circle")
                .setAttr({
                    "cx":50,
                    "cy":70,
                    "r":20,
                    "stroke":"#004A7F",
                    "fill":"#ffffff",
                    "stroke-width":2
                })
            );
            
            host.xui_ui_svgpaper1.append(
                xui.create("xui.svg.path")
                .setHost(host,"xui_svg_path1")
                .setSvgTag("Shapes:Line")
                .setAttr({
                    "path":"M,60,60L,180,130",
                    "stroke":"#004A7F",
                    "fill":"#ffffff",
                    "stroke-width":2
                })
            );
            
            host.xui_ui_svgpaper1.append(
                xui.create("xui.svg.image")
                .setHost(host,"xui_svg_image1")
                .setAttr({
                    "src":"{xui.ini.img_pic}",
                    "x":180,
                    "y":150,
                    "width":100,
                    "height":100
                })
            );
            
            host.xui_ui_svgpaper1.append(
                xui.create("xui.svg.pathComb")
                .setHost(host,"xui_svg_pathcomb1")
                .setSvgTag("FlowChart:Delay")
                .setAttr({
                    "KEY":{
                        "stroke":"#004A7F",
                        "fill":"90-#5198D3-#A1C8F6",
                        "path":"M,20,170L,80,170L,80,170C,113.1371,170,140,190.14725000000004,140,215C,140,239.85274999999996,113.1371,260,80,260L,20,260Z"
                    },
                    "TEXT":{
                        "fill":"#fff",
                        "font-size":"12px",
                        "font-weight":"bold",
                        "text":"Delay"
                    }
                })
            );
            
            host.xui_ui_svgpaper1.append(
                xui.create("xui.UI.FusionChartsXT")
                .setHost(host,"xui_ui_fusionchartsxt1")
                .setLeft("33.333333333333336em")
                .setTop("-13.333333333333334em")
                .setChartType("Bubble")
                .setJSONData({
                    "chart":{
                        "numberprefix":"$",
                        "is3d":"1",
                        "animation":"1",
                        "clipbubbles":"1",
                        "xaxismaxvalue":"100",
                        "showplotborder":"0",
                        "xaxisname":"x-axis",
                        "yaxisname":"y-axis",
                        "chartrightmargin":"30",
                        "drawquadrant":"1",
                        "quadrantlabeltl":"Top Left Quadrant",
                        "quadrantlabeltr":"Top Right Quadrant",
                        "quadrantlabelbr":"Bottom Right Quadrant",
                        "quadrantlabelbl":"Bottom Left Quadrant",
                        "quadrantlinethickness":"1",
                        "quadrantlinecolor":"000080",
                        "canvasbgalpha":"100",
                        "bgcolor":"C7C7C7",
                        "quadrantxval":"58",
                        "quadrantyval":"2.3"
                    },
                    "categories":[
                        {
                            "category":[
                                {
                                    "label":"0%",
                                    "x":"0"
                                },
                                {
                                    "label":"20%",
                                    "x":"20",
                                    "showverticalline":"1"
                                },
                                {
                                    "label":"40%",
                                    "x":"40",
                                    "showverticalline":"1"
                                },
                                {
                                    "label":"60%",
                                    "x":"60",
                                    "showverticalline":"1"
                                },
                                {
                                    "label":"80%",
                                    "x":"80",
                                    "showverticalline":"1"
                                },
                                {
                                    "label":"100%",
                                    "x":"100",
                                    "showverticalline":"1"
                                }
                            ]
                        }
                    ],
                    "dataset":[
                        {
                            "showvalues":"0",
                            "data":[
                                {
                                    "x":"30",
                                    "y":"1.3",
                                    "z":"116",
                                    "name":"Traders",
                                    "color":"000080"
                                },
                                {
                                    "x":"32",
                                    "y":"3.5",
                                    "z":"99",
                                    "name":"Farmers",
                                    "color":"ff0000"
                                },
                                {
                                    "x":"10",
                                    "y":"3.0",
                                    "z":"49",
                                    "name":"Farmers",
                                    "color":"595959"
                                },
                                {
                                    "x":"8",
                                    "y":"1.9",
                                    "z":"33",
                                    "name":"Individuals",
                                    "color":"55FFFF"
                                },
                                {
                                    "x":"65",
                                    "y":"1.4",
                                    "z":"48",
                                    "name":"Corporate Group C",
                                    "color":"00BF55"
                                },
                                {
                                    "x":"90",
                                    "y":"1.0",
                                    "z":"68",
                                    "name":"Corporate Group C",
                                    "color":"FFBF00"
                                },
                                {
                                    "x":"68",
                                    "y":"3.7",
                                    "z":"70",
                                    "name":"HNW Individuals",
                                    "color":"FFFF00"
                                },
                                {
                                    "x":"88",
                                    "y":"3.0",
                                    "z":"30",
                                    "name":"HNW Individuals",
                                    "color":"FF9FFF"
                                }
                            ]
                        }
                    ]
                })
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        },

        // Give a chance to determine which UI controls will be appended to parent container
        customAppend : function(parent, subId, left, top){
            // "return false" will cause all the internal UI controls will be added to the parent panel
            return false;
        }
        /*,
        // To determine how properties affects this module
        propSetAction : function(prop){
        },
        // To set all node's style in this modlue
        customStyle:{}
    },
    //To customize the default properties and event handlers
    Static:{
        $DataModel:{
        },
        $EventHandlers:{
        }
    */
    }
});