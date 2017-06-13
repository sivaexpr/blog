import $ from "jquery";

var view = {};

view.showAds=function(){
	//view.showFlipkartBanner();
	//view.showFlipkartFeatureDeals();
	//view.showFlipkartBestDeals();
	view.showResponsiveAd();
	view.showGoogleHoAd();
	//view.showGoogleBanner();
}

view.showGoogleBanner=function(){
	$("section").prepend('<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>'+
							'<!-- HBanner -->'+
							'<ins class="adsbygoogle"'+
							     'style="display:inline-block;width:100%;height:90px"'+
							     'data-ad-client="ca-pub-4754122423617972"'+
							    ' data-ad-slot="9263876043"></ins>'+
							'<script>'+
							'(adsbygoogle = window.adsbygoogle || []).push({});'+
							'</script>');
	$("#googlebanner").html("<script async src=\"//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js\"></script>"+
								"<ins class=\"adsbygoogle\""+
							     "style=\"display:block\""+
							     "data-ad-client=\"ca-pub-4754122423617972\""+
							     "data-ad-slot=\"1677647649\""+
							     "data-ad-format=\"auto\"></ins>"+
							     "<script>(adsbygoogle = window.adsbygoogle || []).push({});</script>");
}

view.showResponsiveAd=function(){
	$("#garesponsive").html("<script async src=\"//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js\"></script>"+
							"<ins class=\"adsbygoogle\""+
							" style=\"display:block\""+
							" data-ad-client=\"ca-pub-4754122423617972\""+
							" data-ad-slot=\"1677647649\""+
							"data-ad-format=\"auto\"></ins>"+
							"<script>"+
							" (adsbygoogle = window.adsbygoogle || []).push({});"+
							"</script> ");
}

view.showGoogleHoAd=function(){
	$("#ghad").html("<script async src=\"//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js\"></script>"+
					"<ins class=\"adsbygoogle\""+
					"  style=\"display:inline-block;width:300px;height:600px\""+
					"   data-ad-client=\"ca-pub-4754122423617972\""+
					"    data-ad-slot=\"3747869644\"></ins>"+
					"<script>"+
					"(adsbygoogle = window.adsbygoogle || []).push({});"+
					"</script>");
}
view.showFlipkartBanner=function(){
	$("#flipkartbanner").prepend("<iframe src='http://www.flipkart.com/affiliate/displayWidget?affrid=WRID-143212467891393535' frameborder=0 height=90 width=728></iframe>");
}

view.showFlipkartFeatureDeals=function(){
	$("#ffdeals").html("<iframe src='http://www.flipkart.com/affiliate/displayWidget?affrid=WRID-143280153627459482' frameborder=0 height=250 ></iframe>");
}

view.showFlipkartBestDeals=function(){
	$("#fbdeals").html("<iframe src='http://www.flipkart.com/affiliate/displayWidget?affrid=WRID-143316168217862985' frameborder=0 height=250 width=100%></iframe>");
}

export default view;
