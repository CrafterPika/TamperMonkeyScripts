// Metadata
const meta = {
    id: 'ml.crafterpika.pluginmanager69', // ID's should be a unique string
    name: 'PluginManager',
    author: 'CrafterPika',
    version: '0.0.1',
    link: 'https://github.com/CrafterPika/starfiles-plugins',
    compatibility:{
        website: true
    }
}
// Declare Plugin
window['start_' + meta.id] = function(){
    if (window.location.href == "https://starfiles.co/settings") {
        var script = '<script>function yeetPlugins(){confirm("Are you sure to continue, this will disable all plugins you installed")?(localStorage.removeItem("plugins"),alert("Removed all Plugins")):alert("cancelled action")}</script>';
        var htmltext = '<button class="btn btn-small" onclick="yeetPlugins()">Remove All Plugins</button><br><br>';
        var x = document.getElementsByClassName('pagecard object'); 
        x[0].innerHTML = htmltext + script + x[0].innerHTML;
    }
}
// Run Plugin
init_plugin(meta);
