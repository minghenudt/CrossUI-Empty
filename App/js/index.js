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
                .setLeft("14.166666666666666em")
                .setTop("10em")
                .setWidth("44.5em")
                .setHeight("36.666666666666664em")
            );
            
            host.xui_ui_svgpaper1.append(
                xui.create("xui.svg.circle")
                .setHost(host,"xui_svg_circle1")
                .setSvgTag("Shapes:Circle")
                .setAttr({
                    "r":20,
                    "stroke":"#004A7F",
                    "fill":"#ffffff",
                    "stroke-width":2,
                    "cx":150,
                    "cy":110
                })
            );
            
            host.xui_ui_svgpaper1.append(
                xui.create("xui.svg.path")
                .setHost(host,"xui_svg_path1")
                .setSvgTag("Shapes:Line")
                .setAttr({
                    "path":"M,170,120L,290,190",
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
                    "width":100,
                    "height":100,
                    "x":290,
                    "y":170
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