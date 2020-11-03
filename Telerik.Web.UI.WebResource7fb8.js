/* START Telerik.Sitefinity.Web.UI.ContentUI.Views.Scripts.ViewBase.js */
Type.registerNamespace("Telerik.Sitefinity.Web.UI.ContentUI.Views.Backend");
Telerik.Sitefinity.Web.UI.ContentUI.Views.Backend.ViewBase=function(element){Telerik.Sitefinity.Web.UI.ContentUI.Views.Backend.ViewBase.initializeBase(this,[element]);
this._handlePageLoadDelegate=null;
this._baseUrl=null;
this._onLoadEvents=null;
};
Telerik.Sitefinity.Web.UI.ContentUI.Views.Backend.ViewBase.prototype={initialize:function(){Telerik.Sitefinity.Web.UI.ContentUI.Views.Backend.ViewBase.callBaseMethod(this,"initialize");
if(this._onLoadEvents){for(var i=0,len=this._onLoadEvents.length;
i<len;
i++){var h=this._onLoadEvents[i];
if(h&&window[h]){this.add_viewLoaded(window[h]);
}}}this._handlePageLoadDelegate=Function.createDelegate(this,this._handlePageLoad);
Sys.Application.add_load(this._handlePageLoadDelegate);
},dispose:function(){Telerik.Sitefinity.Web.UI.ContentUI.Views.Backend.ViewBase.callBaseMethod(this,"dispose");
this._handleViewLoadedDelegate=null;
Sys.Application.remove_load(this._handlePageLoadDelegate);
},add_viewLoaded:function(handler){this.get_events().addHandler("viewLoaded",handler);
},remove_viewLoaded:function(handler){this.get_events().removeHandler("viewLoaded",handler);
},_handlePageLoad:function(sender,args){var handler=this.get_events().getHandler("viewLoaded");
if(handler){handler(this);
}},get_onLoadEvents:function(){return this._onLoadEvents;
},set_onLoadEvents:function(value){this._onLoadEvents=value;
},get_baseUrl:function(){return this._baseUrl;
},set_baseUrl:function(value){if(this._baseUrl!=value){this._baseUrl=value;
this.raisePropertyChanged("baseUrl");
}}};
Telerik.Sitefinity.Web.UI.ContentUI.Views.Backend.ViewBase.registerClass("Telerik.Sitefinity.Web.UI.ContentUI.Views.Backend.ViewBase",Sys.UI.Control);

/* END Telerik.Sitefinity.Web.UI.ContentUI.Views.Scripts.ViewBase.js */
if(typeof(Sys)!=='undefined')Sys.Application.notifyScriptLoaded();
(function() {
    function loadHandler() {
        var hf = $get('ctl05_TSM');
        if (!hf) return;
        if (!hf._RSM_init) { hf._RSM_init = true; hf.value = ''; }
        hf.value += ';;Telerik.Sitefinity, Version=7.3.5694.0, Culture=neutral, PublicKeyToken=b28c218413bdf563:en:a8f67546-3554-499a-98b7-e1de49fb84e5:721addc';                                    
        Sys.Application.remove_load(loadHandler);
    };
    Sys.Application.add_load(loadHandler);
})();
