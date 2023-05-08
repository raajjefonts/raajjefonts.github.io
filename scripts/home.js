// listings
var fontsListing = [
  {
    num: 1,
    name: "Faruma",
    source: "www.dhivehi.mv",
    web_font_location: "fonts/Faruma.otf", 
    download_font_location: "fonts/Faruma.otf", 
    download_font_size: "77kb"
  },
  {
    num: 2,
    name: "Dhivehi",
    source: "www.dhivehi.mv",
    web_font_location: "fonts/Dhivehi.ttf", 
    download_font_location: "fonts/Dhivehi.ttf", 
    download_font_size: "23kb"
  },
  {
    num: 3,
    name: "MV Boli",
    source: "www.dhivehi.mv",
    web_font_location: "fonts/MV_Boli.otf", 
    download_font_location: "fonts/MV_Boli.otf", 
    download_font_size: "43kb"
  },
  {
    num: 4,
    name: "MV Waheed",
    source: "www.dhivehi.mv",
    web_font_location: "fonts/MV_Waheed.otf", 
    download_font_location: "fonts/MV_Waheed.otf", 
    download_font_size: "22kb"
  },
  {
    num: 5,
    name: "Athu Casual",
    source: "www.dhivehi.mv",
    web_font_location: "fonts/Athu_Casual.otf", 
    download_font_location: "fonts/Athu_Casual.otf", 
    download_font_size: "19kb"
  },
  {
    num: 6,
    name: "A Haleem Faseyha",
    source: "www.dhivehi.mv",
    web_font_location: "fonts/A_Haleem_faseyha.otf", 
    download_font_location: "fonts/A_Haleem_faseyha.otf", 
    download_font_size: "38kb"
  }
];


// actual processing 

var testText = "";
var testTextInput = document.getElementById("test");
testText = testTextInput.value;


if (window.localStorage.getItem('RaajjeFontsTestText')) {
		testTextInput.value = window.localStorage.getItem('RaajjeFontsTestText');
		testText = window.localStorage.getItem('RaajjeFontsTestText');
}


displayListings();

function updateTestText() {
	testText = testTextInput.value;
	window.localStorage.setItem('RaajjeFontsTestText', testText);
	console.log(testText);
	removeAllListings();
	displayListings();
}

function removeAllListings() {
	var listings_box = document.getElementById("listings-box");
	listings_box.innerHTML = "";
}

function displayListings() {
	for (var elisting of fontsListing) {
		/*
		var listing = document.getElementById("listing");
		var listing_name = document.getElementById("listing_name");
		var listing_display = document.getElementById("listing_display");
		var listing_source = document.getElementById("listing_source");
		var listing_size = document.getElementById("listing_size");
		var listing_download = document.getElementById("listing_download");
		*/
		
		var listing_name = document.createElement("p");
		listing_name.className = "listing-name";
		listing_name.innerText = elisting.name;
		
		var style = document.createElement('style');
		style.type = 'text/css';
		style.innerHTML = '@font-face { font-family: "'+elisting.name+'"; src: url("'+elisting.web_font_location+'"); }';
		document.head.appendChild(style);
		
		var listing_display = document.createElement("p");
		listing_display.className = "listing-display";
		listing_display.innerText = testText;
		listing_display.style.fontFamily = elisting.name;
		
		var listing_source = document.createElement("p");
		listing_source.className = "listing-source";
		listing_source.innerText = "by/src: "+elisting.source;
		
		var listing_size = document.createElement("p");
		listing_size.className = "listing-size";
		listing_size.innerText = "size: "+elisting.download_font_size;
		
					var listing_down_text = document.createElement("p");
					listing_down_text.innerText = "Download";
				
				var listing_download = document.createElement("div");
				listing_download.className = "listing-download";
				listing_download.appendChild(listing_down_text);
			
			var download_a = document.createElement("a");
			download_a.appendChild(listing_download);
			download_a.href = elisting.download_font_location;
		
		var horizontal = document.createElement("div");
		horizontal.className = "horizontal";
		horizontal.appendChild(listing_size);
		horizontal.appendChild(download_a);
		
		var listing = document.createElement("div");
		listing.className = "listing";
		
		listing.appendChild(listing_name);
		listing.appendChild(listing_display);
		listing.appendChild(listing_source);
		listing.appendChild(horizontal);
		
		var listings_box = document.getElementById("listings-box");
		listings_box.append(listing);

		
		
	}
}
