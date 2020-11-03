/* START Telerik.Sitefinity.Web.Scripts.UserPreferences.js */
Type.registerNamespace("Telerik.Sitefinity.Web.UI");
var _userPreferences=null;
function GetUserPreferences(){return _userPreferences;
}Telerik.Sitefinity.Web.UI.UserPreferences=function(){Telerik.Sitefinity.Web.UI.UserPreferences.initializeBase(this);
this._timeOffset=0;
this._timeZoneDisplayName=null;
this._timeZoneId=null;
this._userBrowserSettingsForCalculatingDates=true;
};
Telerik.Sitefinity.Web.UI.UserPreferences.prototype={initialize:function(){Telerik.Sitefinity.Web.UI.UserPreferences.callBaseMethod(this,"initialize");
_userPreferences=this;
},dispose:function(){Telerik.Sitefinity.Web.UI.UserPreferences.callBaseMethod(this,"dispose");
},sitefinityLocaleFormat:function(date,format){if(this._userBrowserSettingsForCalculatingDates){return date.localeFormat(format);
}else{return this.sitefinityToLocalDate(date).format(format);
}},sitefinityToLocalDate:function(date){if(date==null){return date;
}if(this._userBrowserSettingsForCalculatingDates){return date;
}else{var ticks=parseInt(date.getTime())+parseInt(this._timeOffset)+parseInt(date.getTimezoneOffset()*60*1000);
var newDate=new Date(ticks);
return newDate;
}},sitefinityToUniversalDate:function(date){if(date==null){return date;
}if(this._userBrowserSettingsForCalculatingDates){return date;
}else{var ticks=parseInt(date.getTime())-parseInt(this._timeOffset)-parseInt(date.getTimezoneOffset()*60*1000);
var newDate=new Date(ticks);
return newDate;
}},get_timeOffset:function(){return this._timeOffset;
},set_timeOffset:function(value){this._timeOffset=value;
},get_timeZoneDisplayName:function(){return this._timeZoneDisplayName;
},set_timeZoneDisplayName:function(value){this._timeZoneDisplayName=value;
},get_timeZoneId:function(){return this._timeZoneId;
},set_timeZoneId:function(value){this._timeZoneId=value;
},get_userBrowserSettingsForCalculatingDates:function(){return this._userBrowserSettingsForCalculatingDates;
},set_userBrowserSettingsForCalculatingDates:function(value){this._userBrowserSettingsForCalculatingDates=value;
}};
Telerik.Sitefinity.Web.UI.UserPreferences.registerClass("Telerik.Sitefinity.Web.UI.UserPreferences",Sys.Component);
Date.prototype.sitefinityLocaleFormat=function(value){return GetUserPreferences().sitefinityLocaleFormat(this,value);
};

/* END Telerik.Sitefinity.Web.Scripts.UserPreferences.js */
if(typeof(Sys)!=='undefined')Sys.Application.notifyScriptLoaded();
(function() {
    function loadHandler() {
        var hf = $get('ctl05_TSM');
        if (!hf) return;
        if (!hf._RSM_init) { hf._RSM_init = true; hf.value = ''; }
        hf.value += ';;Telerik.Sitefinity, Version=7.3.5694.0, Culture=neutral, PublicKeyToken=b28c218413bdf563:en:a8f67546-3554-499a-98b7-e1de49fb84e5:41f6c3a7';                                    
        Sys.Application.remove_load(loadHandler);
    };
    Sys.Application.add_load(loadHandler);
})();
