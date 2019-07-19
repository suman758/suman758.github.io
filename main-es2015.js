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

module.exports = "<!-- header -->\n<app-header></app-header>\n\n<router-outlet></router-outlet>"

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

module.exports = "<div class=\"header\">\n\t\t\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-3 col-sm-3 col-3\">\n                <div class=\"logo\">\n                    <a href=\"#\">\n                        <img src=\"./assets/images/logo.png\" alt=\"trainasyougo\">\n                    </a>\n                </div>\n            </div>\n            <div class=\"col-md-9 col-sm-9 col-9\">\n                <i class=\"fa fa-bars\"></i>\n                <div class=\"right-panel\">\n                    <div class=\"rgt-side\">\n                        <div class=\"row\">\n                            <div class=\"col-md-2\">\n                                <div class=\"detact-search\">\n                                    <div class=\"form-group m-b-0\">\n                                        <input type=\"text\" class=\"form-control\" id=\"location\" aria-describedby=\"\" placeholder=\"Detect my location\">\n                                        <img src=\"./assets/images/detact-icon.png\" alt=\"trainasyougo\">\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"col-md-2\">\n                                <div class=\"distance-box\">\n                                    <form>\n                                        <div class=\"form-group m-b-0\">\n                                            <label for=\"formControlRange\">Distance</label>\n                                            <input type=\"text\" id=\"time_range\" class=\"slider\" />\n                                        </div>\n                                    </form>\n                                </div>\n                            </div>\n                            <div class=\"col-md-3\">\n                                <div class=\"search-fitness\">\n                                    <input type=\"text\" class=\"form-control\" id=\"\" aria-describedby=\"\" placeholder=\"Search Fitness Services\">\n                                    <img src=\"./assets/images/location-icons.png\" alt=\"trainasyougo\">\n                                </div>\n                            </div>\n                            <div class=\"col-md-3\">\n                                <div class=\"fitness-categories\">\n                                    <select class=\"form-control\" placeholder=\"Fitness Categories\" id=\"exampleFormControlSelect1\" multiple=\"multiple\">\n                                        <option selected>Fitness Categories</option>\n                                        <option>Yoga</option>\n                                        <option>Boxing</option>\n                                        <option>Swimming</option>\n                                        <option>Crossfit</option>\n                                        <option>Pilates</option>\n                                        <option>Gymnastics</option>\n                                        <option>Kickboxing</option>\n                                    </select>\n                                    <img src=\"./assets/images/fitness-category.png\" alt=\"trainasyougo\">\n                                </div>\n                            </div>\n                            <div class=\"col-md-2 text-right\">\n                                <div class=\"search-btn\">\n                                    <button type=\"button\" class=\"btn btn-primary\"><i class=\"fa fa-search\"></i>Search</button>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"map-content\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-9\">\n                <div class=\"map-panel\">\n                    <iframe width=\"100%\" height=\"NaN\"\n                    src=\"https://maps.google.com/maps?width=100%&amp;height=NaN&amp;hl=en&amp;q=1%20Grafton%20Street%2C%20Dublin%2C%20Ireland+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed\"\n                    frameborder=\"0\" scrolling=\"no\" marginheight=\"0\" marginwidth=\"0\"><a href=\"https://www.maps.ie/map-my-route/\">Draw\n                    map route</a>\n                </iframe>\n            </div>\n            <div class=\"expand-side-panel\">\n                <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"collapse\" data-target=\"#collapse-expand\">\n                    <i class=\"fa fa-caret-left\"></i>\n                </button>\n                <div id=\"collapse-expand\" class=\"collapse\">\n                    <div class=\"searchber\">\n                        <div class=\"input-group\">\n                            <a href=\"#\">\n                                <i class=\"fa fa-bars\"></i>\n                            </a>\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Search\">\n                            <div class=\"input-group-append\">\n                                <button class=\"btn btn-secondary\" type=\"button\">\n                                    <i class=\"fa fa-search\"></i>\n                                </button>\n                            </div>\n                            <a href=\"#\">\n                                <i class=\"fa fa-times\"></i>\n                            </a>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-md-4 col-sm-4 col-4\">\n                                <div class=\"form-group\">\n                                    <label for=\"exampleInputdriving1\">Travel</label>\n                                    <select placeholder=\"Driving\" class=\"form-control\" id=\"exampleFormControlSelect1\">\n                                        <option>Driving</option>\n                                        <option>Driving</option>\n                                        <option>Driving</option>\n                                        <option>Driving</option>\n                                        <option>Driving</option>\n                                    </select>\n                                </div>\n                            </div>\n                            <div class=\"col-md-4 col-sm-4 col-4\">\n                                <div class=\"form-group\">\n                                    <label for=\"exampleInputdriving1\">Distance</label>\n                                    <select placeholder=\"Distance\" class=\"form-control\" id=\"exampleFormControlSelect1\">\n                                        <option>0</option>\n                                        <option>0</option>\n                                        <option>0</option>\n                                        <option>0</option>\n                                        <option>0</option>\n                                    </select>\n                                </div>\n                            </div>\n                            <div class=\"col-md-4 col-sm-4 col-4\">\n                                <div class=\"form-group\">\n                                    <label for=\"exampleInputdriving1\">Category</label>\n                                    <select placeholder=\"Category\" class=\"form-control\" id=\"exampleFormControlSelect1\">\n                                        <option>Category</option>\n                                        <option>Category</option>\n                                        <option>Category</option>\n                                        <option>Category</option>\n                                        <option>Category</option>\n                                    </select>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <!-- LIST-Result -->\n                    <div class=\"list-result\">\n                        <!-- list-item\t -->\n                        <a href=\"#\">\n                            <div class=\"list-item\">\n                                <div class=\"row\">\n                                    <div class=\"col-md-8 col-sm-8 col-8\">\n                                        <div class=\"left\">\n                                            <h4>Anytime Fitness</h4>\n                                            <div class=\"rating\">\n                                                <span>4.1</span>\n                                                <span><i class=\"fa fa-star\"></i></span>\n                                                <span><i class=\"fa fa-star\"></i></span>\n                                                <span><i class=\"fa fa-star\"></i></span>\n                                                <span><i class=\"fa fa-star\"></i></span>\n                                                <span>(111)</span>\n                                            </div>\n                                            <div class=\"address\">\n                                                <p>\n                                                    CL-236, 1st Floor, Sector-II,<br>\n                                                    Saltlake City,<br>\n                                                    Open until 10:00 pm<br>\n                                                    Price : $750<br>\n                                                    Monday to Sunday:<br> 6:00 AM – 10:00 PM\n                                                </p>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-md-4 col-sm-4 col-4\">\n                                        <div class=\"image-box\">\n                                            <img alt=\"trainasugo\" src=\"./assets/images/search-list-img-1.jpg\">\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </a>\n                        <!-- list-item\t -->\n                        <a href=\"#\">\n                            <div class=\"list-item\">\n                                <div class=\"row\">\n                                    <div class=\"col-md-8 col-sm-8 col-8\">\n                                        <div class=\"left\">\n                                            <h4>Physiomax GYM</h4>\n                                            <div class=\"rating\">\n                                                <span>4.1</span>\n                                                <span><i class=\"fa fa-star\"></i></span>\n                                                <span><i class=\"fa fa-star\"></i></span>\n                                                <span><i class=\"fa fa-star\"></i></span>\n                                                <span><i class=\"fa fa-star\"></i></span>\n                                                <span>(111)</span>\n                                            </div>\n                                            <div class=\"address\">\n                                                <p>\n                                                    CL-236, 1st Floor, Sector-II,<br>\n                                                    Saltlake City,<br>\n                                                    Open until 10:00 pm<br>\n                                                    Price : $750<br>\n                                                    Monday to Sunday:<br> 6:00 AM – 10:00 PM\n                                                </p>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-md-4 col-sm-4 col-4\">\n                                        <div class=\"image-box\">\n                                            <img alt=\"trainasugo\" src=\"./assets/images/search-list-img-2.jpg\">\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </a>\n                        <!-- list-item\t -->\n                        <a href=\"#\">\n                            <div class=\"list-item\">\n                                <div class=\"row\">\n                                    <div class=\"col-md-8 col-sm-8 col-8\">\n                                        <div class=\"left\">\n                                            <h4>Starke Workout</h4>\n                                            <div class=\"rating\">\n                                                <span>4.1</span>\n                                                <span><i class=\"fa fa-star\"></i></span>\n                                                <span><i class=\"fa fa-star\"></i></span>\n                                                <span><i class=\"fa fa-star\"></i></span>\n                                                <span><i class=\"fa fa-star\"></i></span>\n                                                <span>(111)</span>\n                                            </div>\n                                            <div class=\"address\">\n                                                <p>\n                                                    CL-236, 1st Floor, Sector-II,<br>\n                                                    Saltlake City,<br>\n                                                    Open until 10:00 pm<br>\n                                                    Price : $750<br>\n                                                    Monday to Sunday:<br> 6:00 AM – 10:00 PM\n                                                </p>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-md-4 col-sm-4 col-4\">\n                                        <div class=\"image-box\">\n                                            <img alt=\"trainasugo\" src=\"./assets/images/search-list-img-3.jpg\">\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </a>\n                        <!-- list-item\t -->\n                        <a href=\"#\">\n                            <div class=\"list-item\">\n                                <div class=\"row\">\n                                    <div class=\"col-md-8 col-sm-8 col-8\">\n                                        <div class=\"left\">\n                                            <h4>Aventus Fitness</h4>\n                                            <div class=\"rating\">\n                                                <span>4.1</span>\n                                                <span><i class=\"fa fa-star\"></i></span>\n                                                <span><i class=\"fa fa-star\"></i></span>\n                                                <span><i class=\"fa fa-star\"></i></span>\n                                                <span><i class=\"fa fa-star\"></i></span>\n                                                <span>(111)</span>\n                                            </div>\n                                            <div class=\"address\">\n                                                <p>\n                                                    CL-236, 1st Floor, Sector-II,<br>\n                                                    Saltlake City,<br>\n                                                    Open until 10:00 pm<br>\n                                                    Price : $750<br>\n                                                    Monday to Sunday:<br> 6:00 AM – 10:00 PM\n                                                </p>\n                                            </div>\n                                        </div>\n                                    </div>\n                                    <div class=\"col-md-4 col-sm-4 col-4\">\n                                        <div class=\"image-box\">\n                                            <img alt=\"trainasugo\" src=\"./assets/images/search-list-img-4.jpg\">\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </a>\n                    </div>\n                    <!-- LIST-Result -->\n                </div>\n\n                <!-- Details-Result-Box -->\n\n                <div id=\"collapse-expand\" class=\"collapse\">\n                    <div class=\"searchber\">\n                        <div class=\"input-group m-b-0\">\n                            <a href=\"#\">\n                                <i class=\"fa fa-bars\"></i>\n                            </a>\n                            <input type=\"text\" class=\"form-control\" placeholder=\"Search\">\n                            <div class=\"input-group-append\">\n                                <button class=\"btn btn-secondary\" type=\"button\">\n                                    <i class=\"fa fa-search\"></i>\n                                </button>\n                            </div>\n                            <a href=\"#\">\n                                <i class=\"fa fa-times\"></i>\n                            </a>\n                        </div>\n                    </div>\n                    <!-- LIST-Details -->\n                    <div class=\"list-details-panel\">\n                        <div class=\"top-banner-image\">\n                            <a href=\"#\">\n                                <img src=\"./assets/images/fitness.jpg\" alt=\"trainasugo\">\n                            </a>\n                        </div>\n\n                        <div class=\"header-title-description\">\n                            <h2>Anytime Fitness</h2>\n                            <div class=\"rating\">\n                                <span>4.1</span>\n                                <span><i class=\"fa fa-star\"></i></span>\n                                <span><i class=\"fa fa-star\"></i></span>\n                                <span><i class=\"fa fa-star\"></i></span>\n                                <span><i class=\"fa fa-star\"></i></span>\n                                <span>(111)</span>\n                            </div>\n                            <p>Gym</p>\n                        </div>\n                        <div class=\"section-divider\">\n                            <span><i class=\"fa fa-map-marker\"></i></span>\n                            <p>Prangan, 2nd Floor, DD - 7, BN Block, Sector 1, Bidhannagar, Kolkata, West Bengal 700064</p>\n                        </div>\n                        <div class=\"section-divider\">\n                            <span><img src=\"./assets/images/pan-info.png\" alt=\"trainasugo\"></span>\n                            <p>HCJJ+M5 Bidhannagar, Kolkata, West Bengal</p>\n                        </div>\n                        <div class=\"section-divider\">\n                            <span><i class=\"fa fa-globe\"></i></span>\n                            <p>anytimefitness.co.in</p>\n                        </div>\n                        <div class=\"section-divider\">\n                            <span><i class=\"fa fa-phone\"></i></span>\n                            <p>083369 77572</p>\n                        </div>\n                        <div class=\"section-divider\">\n                            <span><i class=\"fa fa-clock-o\"></i></span>\n                            <p>Monday To Sunday: 9:00 AM – 7:00 PM</p>\n                        </div>\n                        <div class=\"section-divider\">\n                            <span><i class=\"fa fa-tag\"></i></span>\n                            <p>Price : $750</p>\n                        </div>\n                        <div class=\"section-divider\">\n                            <span><img src=\"./assets/images/label_gm_blue.png\" alt=\"trainasugo\"></span>\n                            <p>Add a Label</p>\n                        </div>\n                        <div class=\"section-listbox\">\n                            <ul>\n                                <li>\n                                    <a href=\"#\">\n                                        <div class=\"inline-list\">\n                                            <img src=\"./assets/images/directions-icon.png\" alt=\"trainasugo\">\n                                        </div>\n                                        <span>Directions</span>\n                                    </a>\n                                </li>\n                                <li>\n                                    <a href=\"#\">\n                                        <div class=\"inline-list\">\n                                            <img src=\"./assets/images/bookmark-icon.png\" alt=\"trainasugo\">\n                                        </div>\n                                        <span>Save</span>\n                                    </a>\n                                </li>\n                                <li>\n                                    <a href=\"#\">\n                                        <div class=\"inline-list\">\n                                            <img src=\"./assets/images/nearby-icon.png\" alt=\"trainasugo\">\n                                        </div>\n                                        <span>Nearby</span>\n                                    </a>\n                                </li>\n                                <li>\n                                    <a href=\"#\">\n                                        <div class=\"inline-list\">\n                                            <img src=\"./assets/images/mobile-icon.png\" alt=\"trainasugo\">\n                                        </div>\n                                        <span>Send to phone</span>\n                                    </a>\n                                </li>\n                                <li>\n                                    <a href=\"#\">\n                                        <div class=\"inline-list\">\n                                            <img src=\"./assets/images/share-icon.png\" alt=\"trainasugo\">\n                                        </div>\n                                        <span>Share</span>\n                                    </a>\n                                </li>\n                            </ul>\n                        </div>\n                        <div class=\"section-subheader\">\n                            <h2>Photos (82)</h2>\n                            <div class=\"section-image\">\n                                <img src=\"./assets/images/fit.jpg\" alt=\"trainasugo\">\n                            </div>\n                            <button type=\"button\" class=\"btn btn-primary add-button\">\n                                <i class=\"fa fa-camera\"></i>\n                                Add a photo\n                            </button>\n                        </div>\n\n\n                    </div>\n                    <!-- LIST-Details -->\n                </div>\n\n                <!-- Details-Result-Box -->\n            </div>\n            <div class=\"btm-fixed-category-slider text-center\">\n                \n                    <owl-carousel-o [options]=\"customOptions\">\n \n                            <ng-container *ngFor=\"let result of output\" >\n                              <ng-template carouselSlide >\n                                  \n                                        <div class=\"item link\">\n                                                <div class=\"slider\">\n                                                    <h3>{{result.name}}</h3>\n                                                    <img [src]=\"'https://aqueous-river-43130.herokuapp.com/'+result.img\" alt=\"trainasugo\">\n                                                    <p>0 Listing</p>\n                                                </div>\n                                                <div class=\"mobile-bottom\">\n                                                        <h3>{{result.name}}</h3>\n                                                    </div>\n                                                \n                                            </div>\n                                  \n                                    \n                              </ng-template>\n                            </ng-container>\n                         \n                          </owl-carousel-o>\n                <!-- <div class=\"category-carousel owl-carousel owl-theme\">\n                    <div class=\"item link\">\n                        <div class=\"slider\">\n                            <h3>Yoga</h3>\n                            <img src=\"./assets/images/yoga-icon.png\" alt=\"trainasugo\">\n                            <p>150 Listing</p>\n                        </div>\n                        <div class=\"mobile-bottom\">\n                            <h3>Yoga</h3>\n                        </div>\n                    </div>\n                    <div class=\"item link\">\n                        <div class=\"slider\">\n                            <h3>Boxing</h3>\n                            <img src=\"./assets/images/boxing-icon.png\" alt=\"trainasugo\">\n                            <p>100 Listing</p>\n                        </div>\n                        <div class=\"mobile-bottom\">\n                            <h3>Boxing</h3>\n                        </div>\n                    </div>\n                    <div class=\"item link\">\n                        <div class=\"slider\">\n                            <h3>Swimming</h3>\n                            <img src=\"./assets/images/swimming-icon.png\" alt=\"trainasugo\">\n                            <p>245 Listing</p>\n                        </div>\n                        <div class=\"mobile-bottom\">\n                            <h3>Swimming</h3>\n                        </div>\n                    </div>\n                    <div class=\"item link\">\n                        <div class=\"slider\">\n                            <h3>Crossfit</h3>\n                            <img src=\"./assets/images/crossfit-icon.png\" alt=\"trainasugo\">\n                            <p>25 Listing</p>\n                        </div>\n                        <div class=\"mobile-bottom\">\n                            <h3>Crossfit</h3>\n                        </div>\n                    </div>\n                    <div class=\"item link\">\n                        <div class=\"slider\">\n                            <h3>Pilates</h3>\n                            <img src=\"./assets/images/pilates-icon.png\" alt=\"trainasugo\">\n                            <p>50 Listing</p>\n                        </div>\n                        <div class=\"mobile-bottom\">\n                            <h3>Pilates</h3>\n                        </div>\n                    </div>\n                    <div class=\"item link\">\n                        <div class=\"slider\">\n                            <h3>Gymnastics</h3>\n                            <img src=\"./assets/images/gymnastics-icon.png\" alt=\"trainasugo\">\n                            <p>75 Listing</p>\n                        </div>\n                        <div class=\"mobile-bottom\">\n                            <h3>Gymnastics</h3>\n                        </div>\n                    </div>\n                    <div class=\"item link\">\n                        <div class=\"slider\">\n                            <h3>Kickboxing</h3>\n                            <img src=\"./assets/images/kickboxing-icon.png\" alt=\"trainasugo\">\n                            <p>125 Listing</p>\n                        </div>\n                        <div class=\"mobile-bottom\">\n                            <h3>Kickboxing</h3>\n                        </div>\n                    </div>\n                    <div class=\"item link\">\n                        <div class=\"slider\">\n                            <h3>Jiu Jitsu</h3>\n                            <img src=\"./assets/images/jiu-jitsu-icon.png\" alt=\"trainasugo\">\n                            <p>100 Listing</p>\n                        </div>\n                        <div class=\"mobile-bottom\">\n                            <h3>Jiu Jitsu</h3>\n                        </div>\n                    </div>\n                    <div class=\"item link\">\n                        <div class=\"slider\">\n                            <h3>Strength</h3>\n                            <img src=\"./assets/images/strength-conditioning-icon.png\" alt=\"trainasugo\">\n                            <p>200 Listing</p>\n                        </div>\n                        <div class=\"mobile-bottom\">\n                            <h3>Strength</h3>\n                        </div>\n                    </div>\n                    <div class=\"item link\">\n                        <div class=\"slider\">\n                            <h3>Zumba</h3>\n                            <img src=\"./assets/images/zumba-icon.png\" alt=\"trainasugo\">\n                            <p>105 Listing</p>\n                        </div>\n                        <div class=\"mobile-bottom\">\n                            <h3>Zumba</h3>\n                        </div>\n                    </div>\n                    <div class=\"item link\">\n                        <div class=\"slider\">\n                            <h3>Spinning</h3>\n                            <img src=\"./assets/images/spinning-icon.png\" alt=\"trainasugo\">\n                            <p>75 Listing</p>\n                        </div>\n                        <div class=\"mobile-bottom\">\n                            <h3>Spinning</h3>\n                        </div>\n                    </div>\n                    <div class=\"item link\">\n                        <div class=\"slider\">\n                            <h3>Climbing</h3>\n                            <img src=\"./assets/images/climbing-icon.png\" alt=\"trainasugo\">\n                            <p>50 Listing</p>\n                        </div>\n                        <div class=\"mobile-bottom\">\n                            <h3>Climbing</h3>\n                        </div>\n                    </div>\n                    <div class=\"item link\">\n                        <div class=\"slider\">\n                            <h3>Tennis</h3>\n                            <img src=\"./assets/images/tennis-icon.png\" alt=\"trainasugo\">\n                            <p>90 Listing</p>\n                        </div>\n                        <div class=\"mobile-bottom\">\n                            <h3>Tennis</h3>\n                        </div>\n                    </div>\n                    <div class=\"item link\">\n                        <div class=\"slider\">\n                            <h3>Golf</h3>\n                            <img src=\"./assets/images/golf-icon.png\" alt=\"trainasugo\">\n                            <p>145 Listing</p>\n                        </div>\n                        <div class=\"mobile-bottom\">\n                            <h3>Golf</h3>\n                        </div>\n                    </div>\n                    <div class=\"item link\">\n                        <div class=\"slider\">\n                            <h3>Squash</h3>\n                            <img src=\"./assets/images/squash-icon.png\" alt=\"trainasugo\">\n                            <p>215 Listing</p>\n                        </div>\n                        <div class=\"mobile-bottom\">\n                            <h3>Squash</h3>\n                        </div>\n                    </div>\n                </div> -->\n            </div>\n        </div>\n        <div class=\"col-md-3\">\n            <aside>\n                <div class=\"right-sidebar-panel\">\n                    <!-- card-1 -->\n                    <div class=\"card\">\n                        <div class=\"card-body\">\n                            <h5 class=\"card-title\">Green Yoga India</h5>\n                            <div class=\"image-box\">\n                                <img class=\"img-fluid\" src=\"./assets/images/img1.jpg\" alt=\"trainasugo\">\n                            </div>\n                            <div class=\"address-panel\">\n                                <span>\n                                    <i class=\"fa fa-map-marker\"></i>\n                                </span>\n                                <p>Near Khajuraho, P.O. Onta Purwa, Bansarai, Madhya Pradesh 471105, India</p>\n                            </div>\n                            <div class=\"address-panel\">\n                                <span>\n                                    <i class=\"fa fa-clock-o\"></i>\n                                </span>\n                                <p>Monday to Sunday: Open 24 x 7</p>\n                            </div>\n                            <div class=\"address-panel\">\n                                <span>\n                                    <i class=\"fa fa-tag\"></i>\n                                </span>\n                                <p>Price: $750</p>\n                            </div>\n                            <div class=\"link-line\">\n                                <ul>\n                                    <li><a href=\"#\">\n                                        <i class=\"fa fa-globe\"></i>Website\n                                    </a></li>\n                                    <li><a href=\"#\">\n                                        <i class=\"fa fa-heart-o\"></i>Favorite\n                                    </a></li>\n                                    <li><a href=\"#\">\n                                        <i class=\"fa fa-phone\"></i>Phone\n                                    </a></li>\n                                    <li><a href=\"#\">\n                                        <i class=\"fa fa-clock-o\"></i>24/7\n                                    </a></li>\n                                </ul>\n                            </div>\n                        </div>\n                    </div>\n                    <!-- card-2 -->\n                    <div class=\"card\">\n                        <div class=\"card-body\">\n                            <h5 class=\"card-title\">Kranti Yoga Academy</h5>\n                            <div class=\"image-box\">\n                                <img class=\"img-fluid\" src=\"./assets/images/img2.jpg\" alt=\"trainasugo\">\n                            </div>\n                            <div class=\"address-panel\">\n                                <span>\n                                    <i class=\"fa fa-map-marker\"></i>\n                                </span>\n                                <p>Near Khajuraho, P.O. Onta Purwa, Bansarai, Madhya Pradesh 471105, India</p>\n                            </div>\n                            <div class=\"address-panel\">\n                                <span>\n                                    <i class=\"fa fa-clock-o\"></i>\n                                </span>\n                                <p>Monday to Sunday: Open 24 x 7</p>\n                            </div>\n                            <div class=\"address-panel\">\n                                <span>\n                                    <i class=\"fa fa-tag\"></i>\n                                </span>\n                                <p>Price: $750</p>\n                            </div>\n                            <div class=\"link-line\">\n                                <ul>\n                                    <li><a href=\"#\">\n                                        <i class=\"fa fa-globe\"></i>Website\n                                    </a></li>\n                                    <li><a href=\"#\">\n                                        <i class=\"fa fa-heart-o\"></i>Favorite\n                                    </a></li>\n                                    <li><a href=\"#\">\n                                        <i class=\"fa fa-phone\"></i>Phone\n                                    </a></li>\n                                    <li><a href=\"#\">\n                                        <i class=\"fa fa-clock-o\"></i>24/7\n                                    </a></li>\n                                </ul>\n                            </div>\n                        </div>\n                    </div>\n                    <!-- card-3 -->\n                    <div class=\"card\">\n                        <div class=\"card-body\">\n                            <h5 class=\"card-title\">Isha Yoga Center</h5>\n                            <div class=\"image-box\">\n                                <img class=\"img-fluid\" src=\"./assets/images/img3.jpg\" alt=\"trainasugo\">\n                            </div>\n                            <div class=\"address-panel\">\n                                <span>\n                                    <i class=\"fa fa-map-marker\"></i>\n                                </span>\n                                <p>Near Khajuraho, P.O. Onta Purwa, Bansarai, Madhya Pradesh 471105, India</p>\n                            </div>\n                            <div class=\"address-panel\">\n                                <span>\n                                    <i class=\"fa fa-clock-o\"></i>\n                                </span>\n                                <p>Monday to Sunday: Open 24 x 7</p>\n                            </div>\n                            <div class=\"address-panel\">\n                                <span>\n                                    <i class=\"fa fa-tag\"></i>\n                                </span>\n                                <p>Price: $750</p>\n                            </div>\n                            <div class=\"link-line\">\n                                <ul>\n                                    <li><a href=\"#\">\n                                        <i class=\"fa fa-globe\"></i>Website\n                                    </a></li>\n                                    <li><a href=\"#\">\n                                        <i class=\"fa fa-heart-o\"></i>Favorite\n                                    </a></li>\n                                    <li><a href=\"#\">\n                                        <i class=\"fa fa-phone\"></i>Phone\n                                    </a></li>\n                                    <li><a href=\"#\">\n                                        <i class=\"fa fa-clock-o\"></i>24/7\n                                    </a></li>\n                                </ul>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </aside>\n        </div>\n    </div>\n</div>\n</div>"

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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

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


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'train-as-you-go';
    }
};
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
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"]
        ],
        providers: [],
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


let HeaderComponent = class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
};
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/header/header.component.html"),
        styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/components/header/header.component.css")]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"

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




let HomeComponent = class HomeComponent {
    constructor(httpclient) {
        this.httpclient = httpclient;
        this.serverUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl;
        this.output = [];
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
                600: {
                    items: 3
                },
                940: {
                    items: 7
                }
            },
            nav: true
        };
    }
    ngOnInit() {
        this.httpclient.get(this.serverUrl + 'category/api-category').subscribe(data => {
            console.log(data);
            this.output = data;
        }, error => {
            console.log("Rrror", error);
        });
        ;
    }
};
HomeComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html"),
        styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
    })
], HomeComponent);



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
    //baseUrl:'http://localhost:3000/'
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

module.exports = __webpack_require__(/*! E:\train-as-you-go\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map