protobowl_cache_build = 'Sun Jun 02 2013 13:22:27 GMT-0400 (EDT)';

var cache_error,cache_event,cache_status,name,_i,_len,_ref;if(cache_status=function(e){return document.getElementById("cache_status").innerHTML=e,window.parent.postMessage("CacheStatus:"+e,"*")},cache_event=function(){var e;switch(e=applicationCache.status,applicationCache.status){case applicationCache.UPDATEREADY:return cache_status("Updated"),applicationCache.swapCache();case applicationCache.UNCACHED:return cache_status("Uncached");case applicationCache.OBSOLETE:return cache_status("Obsolete");case applicationCache.IDLE:return cache_status("Cached");case applicationCache.DOWNLOADING:return cache_status("Downloading");case applicationCache.CHECKING:return cache_status("Checking")}},cache_error=function(){return window.parent.postMessage("CacheStatus:Error","*")},window.applicationCache){for(_ref=["cached","checking","downloading","noupdate","obsolete","progress","updateready"],_i=0,_len=_ref.length;_len>_i;_i++)name=_ref[_i],applicationCache.addEventListener(name,cache_event,!1);applicationCache.addEventListener("error",cache_error,!1),window.addEventListener("message",function(e){return"CacheUpdate"===e.data?applicationCache.update():void 0},!1)}