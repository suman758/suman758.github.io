(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- header -->\n<app-header></app-header>\n\n<router-outlet (messageEvent)=\"receiveMessage($event)\">\n        <span *ngIf=\"showLoader\" class=\"loading\"></span>\n</router-outlet>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/footer/footer.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/footer/footer.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>footer works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/header/header.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/header/header.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n\t\t\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-3 col-sm-3 col-3\">\n                <div class=\"logo\">\n                    <a href=\"#\">\n                        <img src=\"./assets/images/logo.png\" alt=\"trainasyougo\">\n                    </a>\n                </div>\n            </div>\n            <div class=\"col-md-9 col-sm-9 col-9\">\n                <form #headForm = \"ngForm\" (ngSubmit) = \"onClickSubmit(headForm.value)\">\n                <i class=\"fa fa-bars\"></i>\n                <div class=\"right-panel\">\n                    <div class=\"rgt-side\">\n                        <div class=\"row\">\n                            <div class=\"col-md-2\">\n                                <div class=\"detact-search\">\n                                    <div class=\"form-group m-b-0\">\n                                        <input type=\"text\" class=\"form-control\" name=\"location\" id=\"location\" aria-describedby=\"\" value=\"{{current_loc}}\" placeholder=\"Detect my location\" ngModel>\n                                        <input type=\"hidden\" #nameInput name=\"distance\" id=\"distance\" value=\"5km\">\n                                        <img src=\"./assets/images/detact-icon.png\" alt=\"trainasyougo\">\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"col-md-2\">\n                                <div class=\"distance-box\">\n                                    <form>\n                                        <div class=\"form-group m-b-0\">\n                                            <label for=\"formControlRange\">Distance</label>\n                                            <input type=\"text\" name=\"time_range\" id=\"time_range\" class=\"form-control slider\" value=\"5km\" >\n                                            \n                                        </div>\n                                    </form>\n                                </div>\n                            </div>\n                            <div class=\"col-md-3\">\n                                <div class=\"search-fitness\">\n                                    <input type=\"text\" class=\"form-control\" id=\"\" name=\"searchfitservices\" aria-describedby=\"\" placeholder=\"Search Fitness Services\" ngModel>\n                                    <img src=\"./assets/images/location-icons.png\" alt=\"trainasyougo\">\n                                </div>\n                            </div>\n                            <div class=\"col-md-3\">\n                                <div class=\"fitness-categories\" >\n                                    <select *ngIf=\"outputs.length>0\" class=\"form-control\" placeholder=\"Fitness Categories\"  name=\"fit_cat\" id=\"exampleFormControlSelect1\" multiple=\"multiple\" ngModel>\n                                        <option selected>Fitness Categories</option>\n                                        <option *ngFor=\"let out of outputs\" [value]=\"out._id\">{{out.name}}</option>\n                                        \n                                    </select>\n                                    <img src=\"./assets/images/fitness-category.png\" alt=\"trainasyougo\">\n                                </div>\n                            </div>\n                            <div class=\"col-md-2 text-right\">\n                                <div class=\"search-btn\">\n                                    <button type=\"submit\" class=\"btn btn-primary\"><i class=\"fa fa-search\"></i>Search</button>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </form>\n            </div>\n        </div>\n    </div>\n\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"map-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-9\">\n                <div class=\"map-panel\">\n                    <agm-map \n                    [latitude]=\"lat\"\n                    [longitude]=\"lng\"\n                    [zoom]=\"zoom\"\n                    [disableDefaultUI]=\"false\"\n                    [zoomControl]=\"false\"\n                    (mapClick)=\"mapClicked($event)\"\n                    (mapReady)=\"mapReady()\">\n\n                    <agm-marker \n                    *ngFor=\"let m of markers; let i = index\"\n                    (markerClick)=\"clickedMarker(m.label, i)\"\n                    [latitude]=\"m.lat\"\n                    [longitude]=\"m.lng\"\n                    [markerDraggable]=\"m.draggable\"\n                    (dragEnd)=\"markerDragEnd(m, $event)\">\n\n                    <agm-info-window>\n                        <strong>{{m.label}}</strong>\n                    </agm-info-window>\n\n                </agm-marker>\n\n                        <!-- <agm-circle [latitude]=\"lat + 0.3\" [longitude]=\"lng\" \n                            [radius]=\"5000\"\n                            [fillColor]=\"'red'\"\n                            [circleDraggable]=\"true\"\n                            [editable]=\"true\">\n                        </agm-circle> -->\n\n                    </agm-map>\n                </div>\n                <div class=\"expand-side-panel\">\n                    <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"collapse\" data-target=\"#collapse-expand\">\n                        <i class=\"fa fa-caret-left\"></i>\n                    </button>\n                    <div id=\"collapse-expand\"  [ngClass]=\"(liststatus === true) ? 'collapse list-item-panel' : 'collapse list-item'\">\n                        <div class=\"searchber\">\n                            <div class=\"input-group\">\n                                <a href=\"#\">\n                                    <i class=\"fa fa-bars\"></i>\n                                </a>\n                                <input type=\"text\" class=\"form-control\" placeholder=\"Search\">\n                                <div class=\"input-group-append\">\n                                    <button class=\"btn btn-secondary\" type=\"button\">\n                                        <i class=\"fa fa-search\"></i>\n                                    </button>\n                                </div>\n                                <a href=\"#\">\n                                    <i class=\"fa fa-times\"></i>\n                                </a>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-md-4 col-sm-4 col-4\">\n                                    <div class=\"form-group\">\n                                        <label for=\"exampleInputdriving1\">Travel</label>\n                                        <select placeholder=\"Driving\" class=\"form-control\" id=\"exampleFormControlSelect1\">\n                                            <option>Driving</option>\n                                            <option>Driving</option>\n                                            <option>Driving</option>\n                                            <option>Driving</option>\n                                            <option>Driving</option>\n                                        </select>\n                                    </div>\n                                </div>\n                                <div class=\"col-md-4 col-sm-4 col-4\">\n                                    <div class=\"form-group\">\n                                        <label for=\"exampleInputdriving1\">Distance</label>\n                                        <select placeholder=\"Distance\" class=\"form-control\" id=\"exampleFormControlSelect1\">\n                                            <option>0</option>\n                                            <option>0</option>\n                                            <option>0</option>\n                                            <option>0</option>\n                                            <option>0</option>\n                                        </select>\n                                    </div>\n                                </div>\n                                <div class=\"col-md-4 col-sm-4 col-4\">\n                                    <div class=\"form-group\">\n                                        <label for=\"exampleInputdriving1\">Category</label>\n                                        <select placeholder=\"Category\" class=\"form-control\" id=\"exampleFormControlSelect1\">\n                                            <option>Category</option>\n                                            <option>Category</option>\n                                            <option>Category</option>\n                                            <option>Category</option>\n                                            <option>Category</option>\n                                        </select>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <!-- LIST-Result -->\n                        <div class=\"list-result\">\n                            <!-- list-item\t -->\n                            <a href=\"#\" *ngFor=\"let list of placeList\" (click)=\"placeDetails(list)\">\n                                <div class=\"list-item\">\n                                    <div class=\"row\">\n                                        <div class=\"col-md-8 col-sm-8 col-8\">\n                                            <div class=\"left\">\n                                                <h4>{{list.name}}</h4>\n                                                <div class=\"rating\" *ngIf=\"list.rating!='undefined' && list.rating!=' ' && list.rating!=null\">\n                                                    <span>{{list.rating}}</span>\n                                                    <star-rating [value]=\"list.rating\"  uncheckedcolor=\"black\" size=\"24px\"    readonly=\"false\"></star-rating>\n                                                    \n\n                                                </div>\n                                                <div class=\"address\">\n                                                    <p>\n                                                        {{list.formatted_address}}\n\n                                                    </p>\n                                                    <p>\n                                                        {{list.opening_hours}}\n                                                    </p>\n                                                </div>\n                                            </div>\n                                        </div>\n                                        <div class=\"col-md-4 col-sm-4 col-4\">\n                                            <div class=\"image-box\">\n                                                <img alt=\"trainasugo\" [src]=\"list.photo[0].img\">\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </a>\n\n                        </div>\n                        <!-- LIST-Result -->\n                    </div>\n\n                    <!-- Details-Result-Box -->\n\n                    <div id=\"collapse-expand\" [ngClass]=\"(detstatus === true) ? 'collapse list-details-panel' : 'collapse list-details' \">\n                        <div class=\"searchber\">\n                            <div class=\"input-group m-b-0\">\n                                <a href=\"#\">\n                                    <i class=\"fa fa-bars\"></i>\n                                </a>\n                                <input type=\"text\" class=\"form-control\" placeholder=\"Search\">\n                                <div class=\"input-group-append\">\n                                    <button class=\"btn btn-secondary\" type=\"button\">\n                                        <i class=\"fa fa-search\"></i>\n                                    </button>\n                                </div>\n                                <a href=\"#\" (click)=\"close()\">\n                                    <i class=\"fa fa-times\"></i>\n                                </a>\n                            </div>\n                        </div>\n                        <!-- LIST-Details -->\n                        <div class=\"list-details-panel\">\n                            <div class=\"top-banner-image\">\n                                <a href=\"#\">\n                                    <img [src]=\"placedet.photo[0].img\" alt=\"trainasugo\">\n                                </a>\n                            </div>\n\n                            <div class=\"header-title-description\">\n                                <h2>{{placedet.name}}</h2>\n                                <div class=\"rating\" *ngIf=\"placedet.rating!='undefined' && placedet.rating!=' ' && placedet.rating!=null\">\n                                    <span>{{placedet.rating}}</span>\n                                    <star-rating [value]=\"placedet.rating\"  uncheckedcolor=\"black\" size=\"24px\"    readonly=\"false\"></star-rating>\n                                    <span>({{placedet.user_ratings_total}})</span>\n                                </div>\n                                <p>{{catdetails(placedet.category,output)}}</p>\n                            </div>\n                            <div class=\"section-divider\">\n                                <span><i class=\"fa fa-map-marker\"></i></span>\n                                <p>{{placedet.formatted_address}}</p>\n                            </div>\n                            <!-- <div class=\"section-divider\">\n                                <span><img src=\"./assets/images/pan-info.png\" alt=\"trainasugo\"></span>\n                                <p>HCJJ+M5 Bidhannagar, Kolkata, West Bengal</p>\n                            </div> -->\n                            <div class=\"section-divider\">\n                                <span><i class=\"fa fa-globe\"></i></span>\n                                <p>{{placedet.website_address}}</p>\n                            </div>\n                            <div class=\"section-divider\">\n                                <span><i class=\"fa fa-phone\"></i></span>\n                                <p>{{placedet.phone_number}}</p>\n                            </div>\n                            <div class=\"section-divider\">\n                                <span><i class=\"fa fa-clock-o\"></i></span>\n                                <p>{{placedet.opening_hours}}</p>\n                            </div>\n                            <div class=\"section-divider\">\n                                <span><i class=\"fa fa-tag\"></i></span>\n                                <p>Price : ${{placedet.price}}</p>\n                            </div>\n                            <div class=\"section-divider\">\n                                <span><img src=\"./assets/images/label_gm_blue.png\" alt=\"trainasugo\"></span>\n                                <p>Add a Label</p>\n                            </div>\n                            <div class=\"section-listbox\">\n                                <ul>\n                                    <li>\n                                        <a href=\"#\">\n                                            <div class=\"inline-list\">\n                                                <img src=\"./assets/images/directions-icon.png\" alt=\"trainasugo\">\n                                            </div>\n                                            <span>Directions</span>\n                                        </a>\n                                    </li>\n                                    <li>\n                                        <a href=\"#\">\n                                            <div class=\"inline-list\">\n                                                <img src=\"./assets/images/bookmark-icon.png\" alt=\"trainasugo\">\n                                            </div>\n                                            <span>Save</span>\n                                        </a>\n                                    </li>\n                                    <li>\n                                        <a href=\"#\">\n                                            <div class=\"inline-list\">\n                                                <img src=\"./assets/images/nearby-icon.png\" alt=\"trainasugo\">\n                                            </div>\n                                            <span>Nearby</span>\n                                        </a>\n                                    </li>\n                                    <li>\n                                        <a href=\"#\">\n                                            <div class=\"inline-list\">\n                                                <img src=\"./assets/images/mobile-icon.png\" alt=\"trainasugo\">\n                                            </div>\n                                            <span>Send to phone</span>\n                                        </a>\n                                    </li>\n                                    <li>\n                                        <a href=\"#\">\n                                            <div class=\"inline-list\">\n                                                <img src=\"./assets/images/share-icon.png\" alt=\"trainasugo\">\n                                            </div>\n                                            <span>Share</span>\n                                        </a>\n                                    </li>\n                                </ul>\n                            </div>\n                            <div class=\"section-subheader\">\n                                <h2>Photos ({{placedet.photo.length}})</h2>\n                                <div class=\"section-image\">\n                                    <a href=\"#\" *ngIf=\"placedet.photo[0]!=2\">\n                                        <img [src]=\"placedet.photo[0].img\" alt=\"trainasugo\">\n                                    </a>\n                                    <a href=\"#\" *ngIf=\"placedet.photo[0]!=1\">\n                                        <img [src]=\"serverUrl+placedet.photo[0].img\" alt=\"trainasugo\">\n                                    </a>\n                                </div>\n                                <button type=\"button\" class=\"btn btn-primary add-button\">\n                                    <i class=\"fa fa-camera\"></i>\n                                    Add a photo\n                                </button>\n                            </div>\n\n                            <div class=\"thumbnail-gallery\" *ngIf=\"placedet.photo.length>0\">\n                               <h2>All Photos</h2>\n                               <div class=\"all-gallery-image\">\n                                   <div class=\"row\">\n                                    <div class=\"col-md-4 col-sm-4 col-4\" *ngFor=\"let imgs of placedet.photo\">\n                                        <a href=\"#\" *ngIf=\"imgs.types!=2\">\n                                            <img class=\"img-fluid\" [src]=\"imgs.img\" alt=\"trainasyougo\">\n                                        </a>\n                                        <a href=\"#\" *ngIf=\"imgs.types!=1\">\n                                            <img class=\"img-fluid\" [src]=\"serverUrl+imgs.img\" alt=\"trainasyougo\">\n                                        </a>\n                                    </div>\n                                    \n                                </div>\n                            </div>\n                            \n                    </div>\n\n\n                </div>\n                <!-- LIST-Details -->\n            </div>\n\n            <!-- Details-Result-Box -->\n        </div>\n        <div class=\"btm-fixed-category-slider text-center\">\n\n            <owl-carousel-o [options]=\"customOptions\">\n\n                <ng-container *ngFor=\"let result of output; let i = index\" >\n                  <ng-template carouselSlide >\n\n                    <div class=\"item\">\n\n\n                        <div class=\"slider\" [ngClass]=\"changeActive[i]==true? 'active': ''\">\n                            <label class=\"btn btn-primary\" (click)=\"clickToChange(i)\">\n                                <h3>{{result.name}}</h3>\n                                <img class=\"img-check\" [src]=\"'https://aqueous-river-43130.herokuapp.com/'+result.img\" alt=\"trainasugo\">\n                                <p>0 Listing</p>\n                                <input type=\"checkbox\" name=\"chk1\" id=\"item4\" value=\"val1\" class=\"hidden\" autocomplete=\"off\">\n                            </label>\n                        </div>\n\n                    </div>\n\n\n                </ng-template>\n            </ng-container>\n\n        </owl-carousel-o>\n                <!-- <div class=\"category-carousel owl-carousel owl-theme\">\n                    <div class=\"item link\">\n                        <div class=\"slider\">\n                            <h3>Yoga</h3>\n                            <img src=\"./assets/images/yoga-icon.png\" alt=\"trainasugo\">\n                            <p>150 Listing</p>\n                        </div>\n                        <div class=\"mobile-bottom\">\n                            <h3>Yoga</h3>\n                        </div>\n                    </div>\n                    <div class=\"item link\">\n                        <div class=\"slider\">\n                            <h3>Boxing</h3>\n                            <img src=\"./assets/images/boxing-icon.png\" alt=\"trainasugo\">\n                            <p>100 Listing</p>\n                        </div>\n                        <div class=\"mobile-bottom\">\n                            <h3>Boxing</h3>\n                        </div>\n                    </div>\n                    <div class=\"item link\">\n                        <div class=\"slider\">\n                            <h3>Swimming</h3>\n                            <img src=\"./assets/images/swimming-icon.png\" alt=\"trainasugo\">\n                            <p>245 Listing</p>\n                        </div>\n                        <div class=\"mobile-bottom\">\n                            <h3>Swimming</h3>\n                        </div>\n                    </div>\n                    <div class=\"item link\">\n                        <div class=\"slider\">\n                            <h3>Crossfit</h3>\n                            <img src=\"./assets/images/crossfit-icon.png\" alt=\"trainasugo\">\n                            <p>25 Listing</p>\n                        </div>\n                        <div class=\"mobile-bottom\">\n                            <h3>Crossfit</h3>\n                        </div>\n                    </div>\n                    <div class=\"item link\">\n                        <div class=\"slider\">\n                            <h3>Pilates</h3>\n                            <img src=\"./assets/images/pilates-icon.png\" alt=\"trainasugo\">\n                            <p>50 Listing</p>\n                        </div>\n                        <div class=\"mobile-bottom\">\n                            <h3>Pilates</h3>\n                        </div>\n                    </div>\n                    <div class=\"item link\">\n                        <div class=\"slider\">\n                            <h3>Gymnastics</h3>\n                            <img src=\"./assets/images/gymnastics-icon.png\" alt=\"trainasugo\">\n                            <p>75 Listing</p>\n                        </div>\n                        <div class=\"mobile-bottom\">\n                            <h3>Gymnastics</h3>\n                        </div>\n                    </div>\n                    <div class=\"item link\">\n                        <div class=\"slider\">\n                            <h3>Kickboxing</h3>\n                            <img src=\"./assets/images/kickboxing-icon.png\" alt=\"trainasugo\">\n                            <p>125 Listing</p>\n                        </div>\n                        <div class=\"mobile-bottom\">\n                            <h3>Kickboxing</h3>\n                        </div>\n                    </div>\n                    <div class=\"item link\">\n                        <div class=\"slider\">\n                            <h3>Jiu Jitsu</h3>\n                            <img src=\"./assets/images/jiu-jitsu-icon.png\" alt=\"trainasugo\">\n                            <p>100 Listing</p>\n                        </div>\n                        <div class=\"mobile-bottom\">\n                            <h3>Jiu Jitsu</h3>\n                        </div>\n                    </div>\n                    <div class=\"item link\">\n                        <div class=\"slider\">\n                            <h3>Strength</h3>\n                            <img src=\"./assets/images/strength-conditioning-icon.png\" alt=\"trainasugo\">\n                            <p>200 Listing</p>\n                        </div>\n                        <div class=\"mobile-bottom\">\n                            <h3>Strength</h3>\n                        </div>\n                    </div>\n                    <div class=\"item link\">\n                        <div class=\"slider\">\n                            <h3>Zumba</h3>\n                            <img src=\"./assets/images/zumba-icon.png\" alt=\"trainasugo\">\n                            <p>105 Listing</p>\n                        </div>\n                        <div class=\"mobile-bottom\">\n                            <h3>Zumba</h3>\n                        </div>\n                    </div>\n                    <div class=\"item link\">\n                        <div class=\"slider\">\n                            <h3>Spinning</h3>\n                            <img src=\"./assets/images/spinning-icon.png\" alt=\"trainasugo\">\n                            <p>75 Listing</p>\n                        </div>\n                        <div class=\"mobile-bottom\">\n                            <h3>Spinning</h3>\n                        </div>\n                    </div>\n                    <div class=\"item link\">\n                        <div class=\"slider\">\n                            <h3>Climbing</h3>\n                            <img src=\"./assets/images/climbing-icon.png\" alt=\"trainasugo\">\n                            <p>50 Listing</p>\n                        </div>\n                        <div class=\"mobile-bottom\">\n                            <h3>Climbing</h3>\n                        </div>\n                    </div>\n                    <div class=\"item link\">\n                        <div class=\"slider\">\n                            <h3>Tennis</h3>\n                            <img src=\"./assets/images/tennis-icon.png\" alt=\"trainasugo\">\n                            <p>90 Listing</p>\n                        </div>\n                        <div class=\"mobile-bottom\">\n                            <h3>Tennis</h3>\n                        </div>\n                    </div>\n                    <div class=\"item link\">\n                        <div class=\"slider\">\n                            <h3>Golf</h3>\n                            <img src=\"./assets/images/golf-icon.png\" alt=\"trainasugo\">\n                            <p>145 Listing</p>\n                        </div>\n                        <div class=\"mobile-bottom\">\n                            <h3>Golf</h3>\n                        </div>\n                    </div>\n                    <div class=\"item link\">\n                        <div class=\"slider\">\n                            <h3>Squash</h3>\n                            <img src=\"./assets/images/squash-icon.png\" alt=\"trainasugo\">\n                            <p>215 Listing</p>\n                        </div>\n                        <div class=\"mobile-bottom\">\n                            <h3>Squash</h3>\n                        </div>\n                    </div>\n                </div> -->\n            </div>\n        </div>\n        <div class=\"col-md-3\">\n            <aside>\n                <div class=\"right-sidebar-panel\">\n                    <!-- card-1 -->\n                    <div class=\"card\">\n                        <div class=\"card-body\">\n                            <h5 class=\"card-title\">Green Yoga India</h5>\n                            <div class=\"image-box\">\n                                <img class=\"img-fluid\" src=\"./assets/images/img1.jpg\" alt=\"trainasugo\">\n                            </div>\n                            <div class=\"address-panel\">\n                                <span>\n                                    <i class=\"fa fa-map-marker\"></i>\n                                </span>\n                                <p>Near Khajuraho, P.O. Onta Purwa, Bansarai, Madhya Pradesh 471105, India</p>\n                            </div>\n                            <div class=\"address-panel\">\n                                <span>\n                                    <i class=\"fa fa-clock-o\"></i>\n                                </span>\n                                <p>Monday to Sunday: Open 24 x 7</p>\n                            </div>\n                            <div class=\"address-panel\">\n                                <span>\n                                    <i class=\"fa fa-tag\"></i>\n                                </span>\n                                <p>Price: $750</p>\n                            </div>\n                            <div class=\"link-line\">\n                                <ul class=\"row\">\n                                    <li class=\"col-md-3 col-sm-3 col-3\">\n                                        <a href=\"#\">\n                                            <i class=\"fa fa-globe\"></i>Website\n                                        </a>\n                                    </li>\n                                    <li class=\"col-md-3 col-sm-3 col-3\">\n                                        <a href=\"#\">\n                                            <i class=\"fa fa-heart-o\"></i>Favorite\n                                        </a>\n                                    </li>\n                                    <li class=\"col-md-3 col-sm-3 col-3\">\n                                        <a href=\"#\">\n                                            <i class=\"fa fa-phone\"></i>Phone\n                                        </a>\n                                    </li>\n                                    <li class=\"col-md-3 col-sm-3 col-3\">\n                                        <a href=\"#\">\n                                            <i class=\"fa fa-clock-o\"></i>24/7\n                                        </a>\n                                    </li>\n                                </ul>\n                            </div>\n                        </div>\n                    </div>\n                    <!-- card-2 -->\n                    <div class=\"card\">\n                        <div class=\"card-body\">\n                            <h5 class=\"card-title\">Kranti Yoga Academy</h5>\n                            <div class=\"image-box\">\n                                <img class=\"img-fluid\" src=\"./assets/images/img2.jpg\" alt=\"trainasugo\">\n                            </div>\n                            <div class=\"address-panel\">\n                                <span>\n                                    <i class=\"fa fa-map-marker\"></i>\n                                </span>\n                                <p>Near Khajuraho, P.O. Onta Purwa, Bansarai, Madhya Pradesh 471105, India</p>\n                            </div>\n                            <div class=\"address-panel\">\n                                <span>\n                                    <i class=\"fa fa-clock-o\"></i>\n                                </span>\n                                <p>Monday to Sunday: Open 24 x 7</p>\n                            </div>\n                            <div class=\"address-panel\">\n                                <span>\n                                    <i class=\"fa fa-tag\"></i>\n                                </span>\n                                <p>Price: $750</p>\n                            </div>\n                            <div class=\"link-line\">\n                                <ul class=\"row\">\n                                    <li class=\"col-md-3 col-sm-3 col-3\">\n                                        <a href=\"#\">\n                                            <i class=\"fa fa-globe\"></i>Website\n                                        </a>\n                                    </li>\n                                    <li class=\"col-md-3 col-sm-3 col-3\">\n                                        <a href=\"#\">\n                                            <i class=\"fa fa-heart-o\"></i>Favorite\n                                        </a>\n                                    </li>\n                                    <li class=\"col-md-3 col-sm-3 col-3\">\n                                        <a href=\"#\">\n                                            <i class=\"fa fa-phone\"></i>Phone\n                                        </a>\n                                    </li>\n                                    <li class=\"col-md-3 col-sm-3 col-3\">\n                                        <a href=\"#\">\n                                            <i class=\"fa fa-clock-o\"></i>24/7\n                                        </a>\n                                    </li>\n                                </ul>\n                            </div>\n                        </div>\n                    </div>\n                    <!-- card-3 -->\n                    <div class=\"card\">\n                        <div class=\"card-body\">\n                            <h5 class=\"card-title\">Isha Yoga Center</h5>\n                            <div class=\"image-box\">\n                                <img class=\"img-fluid\" src=\"./assets/images/img3.jpg\" alt=\"trainasugo\">\n                            </div>\n                            <div class=\"address-panel\">\n                                <span>\n                                    <i class=\"fa fa-map-marker\"></i>\n                                </span>\n                                <p>Near Khajuraho, P.O. Onta Purwa, Bansarai, Madhya Pradesh 471105, India</p>\n                            </div>\n                            <div class=\"address-panel\">\n                                <span>\n                                    <i class=\"fa fa-clock-o\"></i>\n                                </span>\n                                <p>Monday to Sunday: Open 24 x 7</p>\n                            </div>\n                            <div class=\"address-panel\">\n                                <span>\n                                    <i class=\"fa fa-tag\"></i>\n                                </span>\n                                <p>Price: $750</p>\n                            </div>\n                            <div class=\"link-line\">\n                                <ul class=\"row\">\n                                    <li class=\"col-md-3 col-sm-3 col-3\">\n                                        <a href=\"#\">\n                                            <i class=\"fa fa-globe\"></i>Website\n                                        </a>\n                                    </li>\n                                    <li class=\"col-md-3 col-sm-3 col-3\">\n                                        <a href=\"#\">\n                                            <i class=\"fa fa-heart-o\"></i>Favorite\n                                        </a>\n                                    </li>\n                                    <li class=\"col-md-3 col-sm-3 col-3\">\n                                        <a href=\"#\">\n                                            <i class=\"fa fa-phone\"></i>Phone\n                                        </a>\n                                    </li>\n                                    <li class=\"col-md-3 col-sm-3 col-3\">\n                                        <a href=\"#\">\n                                            <i class=\"fa fa-clock-o\"></i>24/7\n                                        </a>\n                                    </li>\n                                </ul>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </aside>\n        </div>\n    </div>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");




const routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"], pathMatch: 'full' }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tootlbar-icon {\r\n    padding: 0 14px;\r\n  }\r\n  \r\n  .tootlbar-spacer {\r\n    -webkit-box-flex: 1;\r\n            flex: 1 1 auto;\r\n  }\r\n  \r\n  /* Absolute Center Spinner */\r\n  \r\n  .loading {\r\n    position: fixed;\r\n    z-index: 999;\r\n    height: 2em;\r\n    width: 2em;\r\n    overflow: show;\r\n    margin: auto;\r\n    top: 0;\r\n    left: 0;\r\n    bottom: 0;\r\n    right: 0;\r\n  }\r\n  \r\n  /* Transparent Overlay */\r\n  \r\n  .loading:before {\r\n    content: '';\r\n    display: block;\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: rgba(0,0,0,0.3);\r\n  }\r\n  \r\n  /* :not(:required) hides these rules from IE9 and below */\r\n  \r\n  .loading:not(:required) {\r\n    /* hide \"loading...\" text */\r\n    font: 0/0 a;\r\n    color: transparent;\r\n    text-shadow: none;\r\n    background-color: transparent;\r\n    border: 0;\r\n  }\r\n  \r\n  .loading:not(:required):after {\r\n    content: '';\r\n    display: block;\r\n    font-size: 10px;\r\n    width: 1em;\r\n    height: 1em;\r\n    margin-top: -0.5em;\r\n    -webkit-animation: spinner 1500ms infinite linear;\r\n    animation: spinner 1500ms infinite linear;\r\n    border-radius: 0.5em;\r\n    -webkit-border-radius: 0.5em;\r\n    -moz-border-radius: 0.5em;\r\n    -ms-border-radius: 0.5em;\r\n    -o-border-radius: 0.5em;\r\n    box-shadow: rgba(0, 0, 0, 0.75) 1.5em 0 0 0, rgba(0, 0, 0, 0.75) 1.1em 1.1em 0 0, rgba(0, 0, 0, 0.75) 0 1.5em 0 0, rgba(0, 0, 0, 0.75) -1.1em 1.1em 0 0, rgba(0, 0, 0, 0.75) -1.5em 0 0 0, rgba(0, 0, 0, 0.75) -1.1em -1.1em 0 0, rgba(0, 0, 0, 0.75) 0 -1.5em 0 0, rgba(0, 0, 0, 0.75) 1.1em -1.1em 0 0;\r\n  }\r\n  \r\n  /* Animation */\r\n  \r\n  @-webkit-keyframes spinner {\r\n    0% {\r\n      -webkit-transform: rotate(0deg);\r\n      transform: rotate(0deg);\r\n    }\r\n    100% {\r\n      -webkit-transform: rotate(360deg);\r\n      transform: rotate(360deg);\r\n    }\r\n  }\r\n  \r\n  @keyframes spinner {\r\n    0% {\r\n      -webkit-transform: rotate(0deg);\r\n      transform: rotate(0deg);\r\n    }\r\n    100% {\r\n      -webkit-transform: rotate(360deg);\r\n      transform: rotate(360deg);\r\n    }\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsbUJBQWM7WUFBZCxjQUFjO0VBQ2hCOztFQUVBLDRCQUE0Qjs7RUFDNUI7SUFDRSxlQUFlO0lBQ2YsWUFBWTtJQUNaLFdBQVc7SUFDWCxVQUFVO0lBQ1YsY0FBYztJQUNkLFlBQVk7SUFDWixNQUFNO0lBQ04sT0FBTztJQUNQLFNBQVM7SUFDVCxRQUFRO0VBQ1Y7O0VBRUEsd0JBQXdCOztFQUN4QjtJQUNFLFdBQVc7SUFDWCxjQUFjO0lBQ2QsZUFBZTtJQUNmLE1BQU07SUFDTixPQUFPO0lBQ1AsV0FBVztJQUNYLFlBQVk7SUFDWixpQ0FBaUM7RUFDbkM7O0VBRUEseURBQXlEOztFQUN6RDtJQUNFLDJCQUEyQjtJQUMzQixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQiw2QkFBNkI7SUFDN0IsU0FBUztFQUNYOztFQUVBO0lBQ0UsV0FBVztJQUNYLGNBQWM7SUFDZCxlQUFlO0lBQ2YsVUFBVTtJQUNWLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsaURBQWlEO0lBSWpELHlDQUF5QztJQUN6QyxvQkFBb0I7SUFDcEIsNEJBQTRCO0lBQzVCLHlCQUF5QjtJQUN6Qix3QkFBd0I7SUFDeEIsdUJBQXVCO0lBRXZCLHdTQUF3UztFQUMxUzs7RUFFQSxjQUFjOztFQUVkO0lBQ0U7TUFDRSwrQkFBK0I7TUFJL0IsdUJBQXVCO0lBQ3pCO0lBQ0E7TUFDRSxpQ0FBaUM7TUFJakMseUJBQXlCO0lBQzNCO0VBQ0Y7O0VBaUNBO0lBQ0U7TUFDRSwrQkFBK0I7TUFJL0IsdUJBQXVCO0lBQ3pCO0lBQ0E7TUFDRSxpQ0FBaUM7TUFJakMseUJBQXlCO0lBQzNCO0VBQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b290bGJhci1pY29uIHtcclxuICAgIHBhZGRpbmc6IDAgMTRweDtcclxuICB9XHJcbiAgXHJcbiAgLnRvb3RsYmFyLXNwYWNlciB7XHJcbiAgICBmbGV4OiAxIDEgYXV0bztcclxuICB9XHJcbiAgXHJcbiAgLyogQWJzb2x1dGUgQ2VudGVyIFNwaW5uZXIgKi9cclxuICAubG9hZGluZyB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB6LWluZGV4OiA5OTk7XHJcbiAgICBoZWlnaHQ6IDJlbTtcclxuICAgIHdpZHRoOiAyZW07XHJcbiAgICBvdmVyZmxvdzogc2hvdztcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICByaWdodDogMDtcclxuICB9XHJcbiAgXHJcbiAgLyogVHJhbnNwYXJlbnQgT3ZlcmxheSAqL1xyXG4gIC5sb2FkaW5nOmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjMpO1xyXG4gIH1cclxuICBcclxuICAvKiA6bm90KDpyZXF1aXJlZCkgaGlkZXMgdGhlc2UgcnVsZXMgZnJvbSBJRTkgYW5kIGJlbG93ICovXHJcbiAgLmxvYWRpbmc6bm90KDpyZXF1aXJlZCkge1xyXG4gICAgLyogaGlkZSBcImxvYWRpbmcuLi5cIiB0ZXh0ICovXHJcbiAgICBmb250OiAwLzAgYTtcclxuICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIHRleHQtc2hhZG93OiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgfVxyXG4gIFxyXG4gIC5sb2FkaW5nOm5vdCg6cmVxdWlyZWQpOmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICB3aWR0aDogMWVtO1xyXG4gICAgaGVpZ2h0OiAxZW07XHJcbiAgICBtYXJnaW4tdG9wOiAtMC41ZW07XHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogc3Bpbm5lciAxNTAwbXMgaW5maW5pdGUgbGluZWFyO1xyXG4gICAgLW1vei1hbmltYXRpb246IHNwaW5uZXIgMTUwMG1zIGluZmluaXRlIGxpbmVhcjtcclxuICAgIC1tcy1hbmltYXRpb246IHNwaW5uZXIgMTUwMG1zIGluZmluaXRlIGxpbmVhcjtcclxuICAgIC1vLWFuaW1hdGlvbjogc3Bpbm5lciAxNTAwbXMgaW5maW5pdGUgbGluZWFyO1xyXG4gICAgYW5pbWF0aW9uOiBzcGlubmVyIDE1MDBtcyBpbmZpbml0ZSBsaW5lYXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjVlbTtcclxuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogMC41ZW07XHJcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDAuNWVtO1xyXG4gICAgLW1zLWJvcmRlci1yYWRpdXM6IDAuNWVtO1xyXG4gICAgLW8tYm9yZGVyLXJhZGl1czogMC41ZW07XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC43NSkgMS41ZW0gMCAwIDAsIHJnYmEoMCwgMCwgMCwgMC43NSkgMS4xZW0gMS4xZW0gMCAwLCByZ2JhKDAsIDAsIDAsIDAuNzUpIDAgMS41ZW0gMCAwLCByZ2JhKDAsIDAsIDAsIDAuNzUpIC0xLjFlbSAxLjFlbSAwIDAsIHJnYmEoMCwgMCwgMCwgMC41KSAtMS41ZW0gMCAwIDAsIHJnYmEoMCwgMCwgMCwgMC41KSAtMS4xZW0gLTEuMWVtIDAgMCwgcmdiYSgwLCAwLCAwLCAwLjc1KSAwIC0xLjVlbSAwIDAsIHJnYmEoMCwgMCwgMCwgMC43NSkgMS4xZW0gLTEuMWVtIDAgMDtcclxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC43NSkgMS41ZW0gMCAwIDAsIHJnYmEoMCwgMCwgMCwgMC43NSkgMS4xZW0gMS4xZW0gMCAwLCByZ2JhKDAsIDAsIDAsIDAuNzUpIDAgMS41ZW0gMCAwLCByZ2JhKDAsIDAsIDAsIDAuNzUpIC0xLjFlbSAxLjFlbSAwIDAsIHJnYmEoMCwgMCwgMCwgMC43NSkgLTEuNWVtIDAgMCAwLCByZ2JhKDAsIDAsIDAsIDAuNzUpIC0xLjFlbSAtMS4xZW0gMCAwLCByZ2JhKDAsIDAsIDAsIDAuNzUpIDAgLTEuNWVtIDAgMCwgcmdiYSgwLCAwLCAwLCAwLjc1KSAxLjFlbSAtMS4xZW0gMCAwO1xyXG4gIH1cclxuICBcclxuICAvKiBBbmltYXRpb24gKi9cclxuICBcclxuICBALXdlYmtpdC1rZXlmcmFtZXMgc3Bpbm5lciB7XHJcbiAgICAwJSB7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgIH1cclxuICB9XHJcbiAgQC1tb3ota2V5ZnJhbWVzIHNwaW5uZXIge1xyXG4gICAgMCUge1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgIH1cclxuICAgIDEwMCUge1xyXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICAgIC1vLXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIEAtby1rZXlmcmFtZXMgc3Bpbm5lciB7XHJcbiAgICAwJSB7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgIH1cclxuICB9XHJcbiAgQGtleWZyYW1lcyBzcGlubmVyIHtcclxuICAgIDAlIHtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICB9XHJcbiAgICAxMDAlIHtcclxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgfVxyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loader.service */ "./src/app/loader.service.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");




let AppComponent = class AppComponent {
    constructor(loaderService) {
        this.loaderService = loaderService;
        this.title = 'train-as-you-go';
        this.placeList = [];
    }
    ngOnInit() {
        this.loaderService.status.subscribe((val) => {
            this.showLoader = val;
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _loader_service__WEBPACK_IMPORTED_MODULE_2__["LoaderService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"], { static: false })
], AppComponent.prototype, "child", void 0);
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-font-awesome */ "./node_modules/angular-font-awesome/dist/angular-font-awesome.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-owl-carousel-o */ "./node_modules/ngx-owl-carousel-o/fesm2015/ngx-owl-carousel-o.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _loader_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./loader.service */ "./src/app/loader.service.ts");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./data.service */ "./src/app/data.service.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var ng_starrating__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-starrating */ "./node_modules/ng-starrating/fesm2015/ng-starrating.js");

















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
            _components_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
            _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            angular_font_awesome__WEBPACK_IMPORTED_MODULE_3__["AngularFontAwesomeModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
            ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_10__["CarouselModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
            ng_starrating__WEBPACK_IMPORTED_MODULE_16__["RatingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"],
            _agm_core__WEBPACK_IMPORTED_MODULE_15__["AgmCoreModule"].forRoot({
                // please get your own API key here:
                // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en
                apiKey: 'AIzaSyBby-aJusxMB32mJFPbW7I9CwXb0p05a1A'
            })
        ],
        providers: [_loader_service__WEBPACK_IMPORTED_MODULE_13__["LoaderService"], _data_service__WEBPACK_IMPORTED_MODULE_14__["DataService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/footer/footer.component.html"),
        styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/components/footer/footer.component.css")]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/components/header/header.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/header/header.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../loader.service */ "./src/app/loader.service.ts");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../data.service */ "./src/app/data.service.ts");






let HeaderComponent = class HeaderComponent {
    constructor(httpclient, loaderService, data) {
        this.httpclient = httpclient;
        this.loaderService = loaderService;
        this.data = data;
        this.serverUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl;
        this.lat = 53.350140;
        this.lng = -6.266155;
        this.outputs = [];
        this.result = [];
        this.current_loc = "";
    }
    onClickSubmit(data) {
        this.loaderService.display(true);
        data.distance = this.nameInput.nativeElement.value;
        console.log(data);
        console.log(this.lat);
        console.log(this.lng);
        this.httpclient.post(this.serverUrl + 'placerecords', { distance: data.distance, lat: this.lat, lng: this.lng, cat: data.fit_cat }).subscribe(datas => {
            this.loaderService.display(false);
            console.log(datas);
            this.result = datas;
            this.data.changeMessage(datas);
        }, error => {
            console.log("Rrror", error);
        });
        ;
    }
    getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                if (position) {
                    console.log("Latitude: " + position.coords.latitude +
                        "Longitude: " + position.coords.longitude);
                    this.lat = position.coords.latitude;
                    this.lng = position.coords.longitude;
                }
            }, (error) => console.log(error), { enableHighAccuracy: true });
        }
        else {
            alert("Geolocation is not supported by this browser.");
        }
    }
    ngOnInit() {
        this.getLocation();
        this.data.currentMessages.subscribe((message) => {
            console.log(message);
            this.current_loc = message;
        });
        this.httpclient.get(this.serverUrl + 'category/api-category').subscribe(data => {
            this.loaderService.display(false);
            console.log("suman99", data);
            this.outputs = data;
        }, error => {
            console.log("Rrror", error);
        });
        ;
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"] },
    { type: _data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('nameInput', { static: false })
], HeaderComponent.prototype, "nameInput", void 0);
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/header/header.component.html"),
        styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/components/header/header.component.css")]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/data.service.ts":
/*!*********************************!*\
  !*** ./src/app/data.service.ts ***!
  \*********************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let DataService = class DataService {
    constructor() {
        this.messageSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]('');
        this.messageSources = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]('');
        this.currentMessage = this.messageSource.asObservable();
        this.currentMessages = this.messageSources.asObservable();
    }
    changeMessage(message) {
        this.messageSource.next(message);
    }
    changehead(msg) {
        this.messageSources.next(msg);
    }
};
DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], DataService);



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "agm-map {\r\n    height: 600px;\r\n  }\r\n\r\n  .list-details {\r\n    display: none;\r\n    }\r\n\r\n  .list-items{\r\n      display:none;\r\n    }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxhQUFhO0lBQ2I7O0VBRUE7TUFDRSxZQUFZO0lBQ2QiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImFnbS1tYXAge1xyXG4gICAgaGVpZ2h0OiA2MDBweDtcclxuICB9XHJcblxyXG4gIC5saXN0LWRldGFpbHMge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICAubGlzdC1pdGVtc3tcclxuICAgICAgZGlzcGxheTpub25lO1xyXG4gICAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _loader_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../loader.service */ "./src/app/loader.service.ts");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");






let HomeComponent = class HomeComponent {
    // markers: marker[] = [
    //   {
    // 	  lat: 51.673858,
    // 	  lng: 7.815982,
    // 	  label: 'A',
    // 	  draggable: true
    //   },
    //   {
    // 	  lat: 51.373858,
    // 	  lng: 7.215982,
    // 	  label: 'B',
    // 	  draggable: false
    //   },
    //   {
    // 	  lat: 51.723858,
    // 	  lng: 7.895982,
    // 	  label: 'C',
    // 	  draggable: true
    //   }
    // ]
    constructor(httpclient, loaderService, data) {
        this.httpclient = httpclient;
        this.loaderService = loaderService;
        this.data = data;
        this.messageEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.serverUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl;
        this.output = [];
        this.placeList = [];
        this.liststatus = true;
        this.detstatus = false;
        this.markers = [];
        this.placedet = { photo: [{ img: "" }] };
        this.current_address = "";
        this.customOptions = {
            loop: true,
            autoplay: true,
            mouseDrag: false,
            touchDrag: false,
            pullDrag: false,
            margin: 10,
            autoWidth: true,
            navText: ["‹", "›"],
            dots: false,
            navSpeed: 700,
            responsive: {
                0: {
                    items: 2
                },
                420: {
                    items: 3
                },
                740: {
                    items: 7
                },
                940: {
                    items: 7
                }
            },
            nav: true
        };
        // google maps zoom level
        this.zoom = 12;
        this.changeActive = [];
    }
    clickedMarker(label, index) {
        console.log(`clicked the marker: ${label || index}`);
    }
    // mapClicked($event: MouseEvent) {
    //   this.markers.push({
    //     lat: $event.coords.lat,
    //     lng: $event.coords.lng,
    //     draggable: true
    //   });
    // }
    markerDragEnd(m, $event) {
        console.log('dragEnd', m, $event);
    }
    ngOnInit() {
        this.loaderService.display(true);
        this.httpclient.get(this.serverUrl + 'category/api-category').subscribe(data => {
            this.loaderService.display(false);
            console.log(data);
            this.output = data;
        }, error => {
            console.log("Rrror", error);
        });
        ;
        this.httpclient.post(this.serverUrl + 'placerecords', { distance: "5km", lat: this.lat, lng: this.lng }).subscribe(datas => {
            this.loaderService.display(false);
            this.placeList = datas;
            this.markers = [];
            this.placeList.forEach((key, val) => {
                //console.log(key);
                this.markers.push({
                    lat: key.lat,
                    lng: key.lng,
                    label: key.name
                });
            });
        }, error => {
            console.log("Rrror", error);
        });
        ;
        this.data.currentMessage.subscribe((message) => {
            console.log(message);
            this.placeList = message;
            this.markers = [];
            if (this.placeList.length > 0) {
                //this.placeList.forEach((key : any, val: any) => {
                for (let i = 0; i < this.placeList.length; i++) {
                    //console.log(key);
                    this.markers.push({
                        lat: this.placeList[i].lat,
                        lng: this.placeList[i].lng,
                        label: this.placeList[i].name
                    });
                }
                //});
            }
        });
        this.getLocation();
    }
    catdetails(cat_id, allcats) {
        var catall = allcats.filter(function (cats) {
            return cats._id == cat_id;
        });
        return (catall.length > 0 ? catall[0].name : "");
    }
    mapReady() {
        this.getAddress(this.lat, this.lng);
    }
    getAddress(latitude, longitude) {
        let geocoder = new google.maps.Geocoder();
        let latlng = new google.maps.LatLng(this.lat, this.lng);
        let request = {
            latLng: latlng
        };
        geocoder.geocode(request, (results, status) => {
            if (status == google.maps.GeocoderStatus.OK) {
                if (results[0] != null) {
                    let city = results[0].address_components[results[0]
                        .address_components.length - 4].short_name;
                    console.log(results[0]);
                    this.current_address = results[0].formatted_address;
                    //this.messageEvent.emit(this.current_address);
                    this.data.changehead(this.current_address);
                    //this.shareService.setLocationDetails(city);
                }
                else {
                    alert("No address available");
                }
            }
        });
    }
    clickToChange(index) {
        //alert(index)
        // this.changeActive = []
        this.changeActive[index] = true;
        // console.log(this.changeActive);
    }
    getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                if (position) {
                    console.log(position);
                    console.log("Latitude: " + position.coords.latitude +
                        "Longitude: " + position.coords.longitude);
                    this.lat = position.coords.latitude;
                    this.lng = position.coords.longitude;
                }
            }, (error) => console.log(error));
        }
        else {
            alert("Geolocation is not supported by this browser.");
        }
    }
    placeDetails(list) {
        this.detstatus = true;
        this.liststatus = false;
        console.log(list);
        this.placedet = list;
    }
    close() {
        this.detstatus = false;
        this.liststatus = true;
    }
};
HomeComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _loader_service__WEBPACK_IMPORTED_MODULE_4__["LoaderService"] },
    { type: _data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], HomeComponent.prototype, "messageEvent", void 0);
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html"),
        styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/loader.service.ts":
/*!***********************************!*\
  !*** ./src/app/loader.service.ts ***!
  \***********************************/
/*! exports provided: LoaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoaderService", function() { return LoaderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let LoaderService = class LoaderService {
    constructor() {
        this.status = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
    }
    display(value) {
        this.status.next(value);
    }
};
LoaderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], LoaderService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    baseUrl: 'https://aqueous-river-43130.herokuapp.com/'
    //baseUrl:' http://localhost:1337/localhost:3000/'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\26-7-19\trainsasyougo-3rdtimel\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map