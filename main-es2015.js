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

module.exports = "<!-- header -->\r\n<app-header></app-header>\r\n\r\n<router-outlet (messageEvent)=\"receiveMessage($event)\">\r\n        <span *ngIf=\"showLoader\" class=\"loading\"></span>\r\n</router-outlet>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/footer/footer.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/footer/footer.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>footer works!</p>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/header/header.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/header/header.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\r\n\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-2 col-sm-2 col-2\">\r\n        <div class=\"logo\">\r\n          <a href=\"#\">\r\n            <img src=\"./assets/images/logo.png\" alt=\"trainasyougo\">\r\n          </a>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-10 col-sm-10 col-10\" [ngClass]=\"(closestatus!=false)?'active':'inactive'\">\r\n        <!-- <form #headForm=\"ngForm\" (ngSubmit)=\"onClickSubmit(headForm.value)\"> -->\r\n        <!-- <i class=\"fa fa-bars\"></i> -->\r\n        <div class=\"right-panel\">\r\n          <div class=\"rgt-side\">\r\n            <ul class=\"nav navbar-nav profile-menu\" *ngIf=\"user_det!=null\">\r\n              <li class=\"nav-item dropdown\">\r\n                <a href=\"#\" class=\"nav-link dropdown-toggle\" data-toggle=\"dropdown\">Guest User</a>\r\n                <div class=\"dropdown-menu dropdown-menu-right\">\r\n                  <!-- <a href=\"#\" class=\"dropdown-item\"><i class=\"fa fa-user\"></i>Profile</a> -->\r\n                  <!-- <a href=\"#\" class=\"dropdown-item\"><i class=\"fa fa-cog\"></i>Settings</a> -->\r\n                  <div class=\"dropdown-divider\"></div>\r\n                  <a href=\"#\" (click)=\"logout()\" class=\"dropdown-item\"><i class=\"fa fa-sign-out\"></i>Logout</a>\r\n                </div>\r\n              </li>\r\n            </ul>\r\n            <div class=\"row\">\r\n              <div class=\"close-btn\">\r\n                <a href=\"#\" (click)=\"close()\">\r\n                  <i class=\"fa fa-times\"></i>\r\n                </a>\r\n              </div>\r\n              <div class=\"col-md-2\">\r\n                <div class=\"detact-search\">\r\n                  <div class=\"form-group m-b-0\">\r\n                    <input type=\"text\" class=\"form-control\" name=\"location\" id=\"location\" aria-describedby=\"\"\r\n                      value=\"{{current_loc}}\" placeholder=\"Detect my location\" ngModel readonly>\r\n                    <input type=\"hidden\" #nameInput name=\"distance\" id=\"distance\" value=\"20km\">\r\n                    <i class=\"fa fa-dot-circle-o\" aria-hidden=\"true\" (click)=\"currentloc()\"></i>\r\n                    <!-- <img src=\"./assets/images/detact-icon.png\" alt=\"trainasyougo\" (click)=\"getLocation()\"> -->\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-2\">\r\n                <div class=\"distance-box\">\r\n                  <form>\r\n                    <div class=\"form-group m-b-0\">\r\n                      <label for=\"formControlRange\">Distance</label>\r\n                      <input type=\"text\" name=\"time_range\" id=\"time_range\" class=\"form-control slider\" value=\"5km\">\r\n\r\n                    </div>\r\n                  </form>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-3\">\r\n                <div class=\"fitness-categories\">\r\n                  <!-- <select class=\"custom-select\" id=\"basic\" multiple=\"multiple\" *ngIf=\"outputs.length>0\">\r\n                      <option *ngFor=\"let out of outputs\" value=\"{{out._id}}\">{{out.name}}</option>\r\n                    </select> -->\r\n\r\n                  <!-- <ul>\r\n                      <li *ngFor=\"let p of selItems\">{{p.name}}</li>\r\n                    </ul> -->\r\n                  <ng-multiselect-dropdown-angular7 [placeholder]=\"'Fitness Categories'\" [data]=\"dropdownList\"\r\n                    [settings]=\"dropdownSettings\" (onSelect)=\"onItemSelect($event)\" [(ngModel)]=\"selItems\"\r\n                    (onSelectAll)=\"onSelectAll($event)\" (onDeSelect)=\"onDeSelect($event)\">\r\n                  </ng-multiselect-dropdown-angular7>\r\n                  <!-- <select *ngIf=\"outputs.length>0\" class=\"form-control\" placeholder=\"Fitness Categories\"\r\n                      name=\"fit_cat\" id=\"exampleFormControlSelect1\" multiple=\"multiple\" ngModel>\r\n                      <option selected>Fitness Categories</option>\r\n                      <option *ngFor=\"let out of outputs\" [value]=\"out._id\">{{out.name}}</option>\r\n\r\n                    </select> -->\r\n                  <img src=\"./assets/images/fitness-category.png\" alt=\"trainasyougo\">\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-2 add-or\">\r\n                <!-- <h5>or</h5> -->\r\n                <div class=\"search-fitness\">\r\n                  <input ngx-google-places-autocomplete class=\"form-control\" [options]='options' #placesRef=\"ngx-places\"\r\n                    (onAddressChange)=\"handleAddressChange($event)\" placeholder=\"Search location\" />\r\n                  <!-- <input type=\"text\" class=\"form-control\" id=\"\" name=\"searchfitservices\" aria-describedby=\"\" placeholder=\"Search location\" ngModel> -->\r\n                  <!-- <img src=\"./assets/images/location-icons.png\" alt=\"trainasyougo\"> -->\r\n                  <i class=\"fa fa-map-marker\"></i>\r\n                </div>\r\n              </div>\r\n              <div class=\"col-md-3 text-right\">\r\n                <div class=\"search-btn\">\r\n                  <button type=\"button\" class=\"btn btn-primary\" (click)=\"onClickSubmit()\">\r\n                    <i class=\"fa fa-search\"></i>Search\r\n                  </button>\r\n                  <ul class=\"nav navbar-nav profile-menu\" *ngIf=\"user_det!=null\">\r\n                    <li class=\"nav-item dropdown\">\r\n                      <a href=\"#\" class=\"nav-link dropdown-toggle\" data-toggle=\"dropdown\">Guest User</a>\r\n                      <div class=\"dropdown-menu dropdown-menu-right\">\r\n                        <!-- <a href=\"#\" class=\"dropdown-item\"><i class=\"fa fa-user\"></i>Profile</a> -->\r\n                        <!-- <a href=\"#\" class=\"dropdown-item\"><i class=\"fa fa-cog\"></i>Settings</a> -->\r\n                        <div class=\"dropdown-divider\"></div>\r\n                        <a href=\"#\" (click)=\"logout()\" class=\"dropdown-item\"><i class=\"fa fa-sign-out\"></i>Logout</a>\r\n                      </div>\r\n                    </li>\r\n                  </ul>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!-- </form> -->\r\n      </div>\r\n      <div class=\"col-md-10 col-sm-10 col-10\" [ngClass]=\"(closestatus != true)?'active':'inactive'\">\r\n        <div class=\"right-panel\">\r\n          <div class=\"rgt-side\">\r\n            <button type=\"submit\" class=\"btn btn-primary\" (click)=\"open_search_bar()\"><img src=\"./assets/images/open-icon.png\" alt=\"trainasugo\">Open Search Area</button>\r\n            <input type=\"hidden\" #nameInput name=\"distance\" id=\"distance\" value=\"20km\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"map-content\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-9\">\r\n        <div class=\"map-panel\">\r\n          <agm-map [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"zoom\" [disableDefaultUI]=\"false\" [zoomControl]=\"false\"\r\n            (mapClick)=\"mapClicked($event)\" (mapReady)=\"mapReady()\">\r\n\r\n            <agm-marker *ngFor=\"let m of markers; let i = index\" (markerClick)=\"clickedMarker(infowindow)\"\r\n              [latitude]=\"m.lat\" [longitude]=\"m.lng\" [markerDraggable]=\"m.draggable\"\r\n              (dragEnd)=\"markerDragEnd(m, $event)\" [iconUrl]=\"flag\">\r\n\r\n\r\n              <agm-info-window #infowindow>\r\n                <div class=\"map-box\">\r\n                  <div class=\"row\">\r\n                    <div class=\"col-md-3\">\r\n                      <div class=\"left-side\">\r\n                        <img [src]=\"m.img\" alt=\"trainasugo\">\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"col-md-9\">\r\n                      <div class=\"address\">\r\n                        <h3>{{m.label}}</h3>\r\n                        <h3><i class=\"fa fa-map-marker\"></i>Address</h3>\r\n                        <p>{{m.formatted_address}}</p>\r\n                        <h3><i class=\"fa fa-clock-o\"></i>Timing</h3>\r\n                        <p>{{m.opening_hours}}</p>\r\n                        <h3 *ngIf=\"m.website_address!='undefined' && m.website_address!=' ' && m.website_address!=null\">\r\n                          <i class=\"fa fa-globe\"></i>Website</h3>\r\n                        <p *ngIf=\"m.website_address!='undefined' && m.website_address!=' ' && m.website_address!=null\">\r\n                          <a [href]=\"m.website_address\" target=\"_blank\">{{m.website_address}}</a></p>\r\n\r\n                        <p><i class=\"fa fa-tag\"></i><b>Price:</b>{{m.price}}</p>\r\n                        <div class=\"section-listbox\">\r\n                          <ul>\r\n                            <li>\r\n                              <a href=\"#\" (click)=\"google_map_directions(m.lat,m.lng)\">\r\n                                <div class=\"inline-list\">\r\n                                  <img src=\"./assets/images/directions-icon.png\" alt=\"trainasugo\">\r\n                                </div>\r\n                                <!-- <span>Directions</span> -->\r\n                              </a>\r\n                            </li>\r\n\r\n                            <li>\r\n\r\n                              <div class=\"inline-list\">\r\n                                <share-button button=\"facebook\" text=\"Share\" [showText]=\"false\" style=\"width:50px;\">\r\n                                </share-button>\r\n                                <!-- <span>Facebook</span> -->\r\n                              </div>\r\n\r\n                            </li>\r\n                            <li>\r\n                              <div class=\"inline-list\">\r\n                                <share-button button=\"twitter\" text=\"Tweet\" [showText]=\"false\"></share-button>\r\n                                <!-- <span>Twitter</span> -->\r\n                              </div>\r\n                            </li>\r\n\r\n                          </ul>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"rating\" *ngIf=\"m.rating!='undefined' && m.rating!=' ' && m.rating!=null\">\r\n                        <!-- <span>{{m.rating}}</span> -->\r\n                        <star-rating value=\"{{m.rating}}\" checkedcolor=\"blue\" uncheckedcolor=\"black\" size=\"24px\"\r\n                          readonly=\"true\">\r\n                        </star-rating>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </agm-info-window>\r\n\r\n            </agm-marker>\r\n\r\n            <agm-marker [latitude]=\"lat\" [longitude]=\"lng\" [iconUrl]=\"icon\"></agm-marker>\r\n\r\n\r\n\r\n            <!-- <agm-circle [latitude]=\"lat + 0.3\" [longitude]=\"lng\" \r\n                            [radius]=\"5000\"\r\n                            [fillColor]=\"'red'\"\r\n                            [circleDraggable]=\"true\"\r\n                            [editable]=\"true\">\r\n                        </agm-circle> -->\r\n\r\n          </agm-map>\r\n        </div>\r\n        <div class=\"expand-side-panel\">\r\n          <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"collapse\" data-target=\"#collapse-expand\">\r\n            <i class=\"fa fa-list\"></i>\r\n          </button>\r\n          <div id=\"collapse-expand\"\r\n            [ngClass]=\"(liststatus === true) ? 'collapse list-item-panel' : 'collapse list-item'\">\r\n            <div class=\"searchber\">\r\n              <!-- <div class=\"close-btn\">\r\n                <a href=\"#\" (click)=\"close()\">\r\n                  <i class=\"fa fa-times\"></i>\r\n                </a>\r\n              </div> -->\r\n              <h2><i class=\"fa fa-bars\"></i></h2>\r\n              <!-- <div class=\"input-group\">\r\n                                <a href=\"#\">\r\n                                    <i class=\"fa fa-bars\"></i>\r\n                                </a>\r\n                                <input type=\"text\" class=\"form-control\" placeholder=\"Search\">\r\n                                <div class=\"input-group-append\">\r\n                                    <button class=\"btn btn-secondary\" type=\"button\">\r\n                                        <i class=\"fa fa-search\"></i>\r\n                                    </button>\r\n                                </div>\r\n                                <a href=\"#\">\r\n                                    <i class=\"fa fa-times\"></i>\r\n                                </a>\r\n                            </div> -->\r\n              <!-- <div class=\"row\">\r\n                                <div class=\"col-md-4 col-sm-4 col-4\">\r\n                                    <div class=\"form-group\">\r\n                                        <label for=\"exampleInputdriving1\">Travel</label>\r\n                                        <select placeholder=\"Driving\" class=\"form-control\" id=\"exampleFormControlSelect1\">\r\n                                            <option>Driving</option>\r\n                                            <option>Driving</option>\r\n                                            <option>Driving</option>\r\n                                            <option>Driving</option>\r\n                                            <option>Driving</option>\r\n                                        </select>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-md-4 col-sm-4 col-4\">\r\n                                    <div class=\"form-group\">\r\n                                        <label for=\"exampleInputdriving1\">Distance</label>\r\n                                        <select placeholder=\"Distance\" class=\"form-control\" id=\"exampleFormControlSelect1\">\r\n                                            <option>0</option>\r\n                                            <option>0</option>\r\n                                            <option>0</option>\r\n                                            <option>0</option>\r\n                                            <option>0</option>\r\n                                        </select>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-md-4 col-sm-4 col-4\">\r\n                                    <div class=\"form-group\">\r\n                                        <label for=\"exampleInputdriving1\">Category</label>\r\n                                        <select placeholder=\"Category\" class=\"form-control\" id=\"exampleFormControlSelect1\">\r\n                                            <option>Category</option>\r\n                                            <option>Category</option>\r\n                                            <option>Category</option>\r\n                                            <option>Category</option>\r\n                                            <option>Category</option>\r\n                                        </select>\r\n                                    </div>\r\n                                </div>\r\n                            </div> -->\r\n            </div>\r\n            <!-- LIST-Result -->\r\n            <div class=\"list-result\">\r\n              <!-- list-item\t -->\r\n              <a href=\"#\" *ngFor=\"let list of placeList\" (click)=\"placeDetails(list)\">\r\n                <div class=\"list-item\">\r\n                  <div class=\"row\">\r\n                    <div class=\"col-md-8 col-sm-8 col-8\">\r\n                      <div class=\"left\">\r\n                        <h4>{{list.name}}</h4>\r\n                        <div class=\"rating\" *ngIf=\"list.rating!='undefined' && list.rating!=' ' && list.rating!=null\">\r\n                          <span>{{list.rating}}</span>\r\n                          <star-rating [value]=\"list.rating\" uncheckedcolor=\"black\" size=\"24px\" readonly=\"false\">\r\n                          </star-rating>\r\n\r\n\r\n                        </div>\r\n                        <div class=\"address\">\r\n                          <p>\r\n                            {{list.formatted_address}}\r\n\r\n                          </p>\r\n                          <p>\r\n                            {{list.opening_hours}}\r\n                          </p>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"col-md-4 col-sm-4 col-4\">\r\n                      <div class=\"image-box\">\r\n                        <img alt=\"trainasugo\" [src]=\"list.photo[0].img\">\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </a>\r\n\r\n            </div>\r\n            <!-- LIST-Result -->\r\n          </div>\r\n\r\n          <!-- Details-Result-Box -->\r\n\r\n          <div id=\"collapse-expand\"\r\n            [ngClass]=\"(detstatus === true) ? 'collapse list-details-panel' : 'collapse list-details' \">\r\n            <div class=\"close-btn\">\r\n              <a href=\"#\" (click)=\"close()\">\r\n                <i class=\"fa fa-times\"></i>\r\n              </a>\r\n            </div>\r\n            <!-- <div class=\"searchber\">\r\n              <div class=\"input-group m-b-0\">\r\n                <a href=\"#\">\r\n                                    <i class=\"fa fa-bars\"></i>\r\n                                </a>\r\n                                <input type=\"text\" class=\"form-control\" placeholder=\"Search\">\r\n                                <div class=\"input-group-append\">\r\n                                    <button class=\"btn btn-secondary\" type=\"button\">\r\n                                        <i class=\"fa fa-search\"></i>\r\n                                    </button>\r\n                                </div> \r\n\r\n              </div>\r\n            </div>-->\r\n            <!-- LIST-Details -->\r\n            <div class=\"list-details-panel\">\r\n              <div class=\"top-banner-image\">\r\n                <a href=\"#\">\r\n                  <img [src]=\"placedet.photo[0].img\" alt=\"trainasugo\">\r\n                </a>\r\n              </div>\r\n\r\n              <div class=\"header-title-description\">\r\n                <h2>{{placedet.name}}</h2>\r\n                <div class=\"rating\"\r\n                  *ngIf=\"placedet.rating!='undefined' && placedet.rating!=' ' && placedet.rating!=null\">\r\n                  <span>{{placedet.rating}}</span>\r\n                  <star-rating value=\"{{placedet.rating}}\" checkedcolor=\"blue\" uncheckedcolor=\"black\" size=\"20px\"\r\n                    readonly=\"true\">\r\n                  </star-rating>\r\n                  <span>({{placedet.user_ratings_total}})</span>\r\n                </div>\r\n                <p>{{catdetails(placedet.category,output)}}</p>\r\n              </div>\r\n              <div class=\"section-divider\">\r\n                <span><i class=\"fa fa-map-marker\"></i></span>\r\n                <p>{{placedet.formatted_address}}</p>\r\n              </div>\r\n              <!-- <div class=\"section-divider\">\r\n                                <span><img src=\"./assets/images/pan-info.png\" alt=\"trainasugo\"></span>\r\n                                <p>HCJJ+M5 Bidhannagar, Kolkata, West Bengal</p>\r\n                            </div> -->\r\n              <div class=\"section-divider\">\r\n                <span><i class=\"fa fa-globe\"></i></span>\r\n                <p>{{placedet.website_address}}</p>\r\n              </div>\r\n              <div class=\"section-divider\">\r\n                <span><i class=\"fa fa-phone\"></i></span>\r\n                <p>{{placedet.phone_number}}</p>\r\n              </div>\r\n              <div class=\"section-divider\">\r\n                <span><i class=\"fa fa-clock-o\"></i></span>\r\n                <p>{{placedet.opening_hours}}</p>\r\n              </div>\r\n              <div class=\"section-divider\">\r\n                <span><i class=\"fa fa-tag\"></i></span>\r\n                <p>Price : {{placedet.price}}</p>\r\n              </div>\r\n              <!-- <div class=\"section-divider\">\r\n                <span><img src=\"./assets/images/label_gm_blue.png\" alt=\"trainasugo\"></span>\r\n                <p>Add a Label</p>\r\n              </div> -->\r\n              <div class=\"section-listbox\">\r\n                <ul>\r\n                  <li>\r\n                    <a href=\"#\" (click)=\"google_map_directions(placedet.lat,placedet.lng)\">\r\n                      <div class=\"inline-list\">\r\n                        <img src=\"./assets/images/directions-icon.png\" alt=\"trainasugo\">\r\n                      </div>\r\n                      <!-- <span>Directions</span> -->\r\n                    </a>\r\n                  </li>\r\n                  <!-- <li>\r\n                                        <a href=\"#\">\r\n                                            <div class=\"inline-list\">\r\n                                                <img src=\"./assets/images/bookmark-icon.png\" alt=\"trainasugo\">\r\n                                            </div>\r\n                                            <span>Save</span>\r\n                                        </a>\r\n                                    </li>\r\n                                    <li>\r\n                                        <a href=\"#\">\r\n                                            <div class=\"inline-list\">\r\n                                                <img src=\"./assets/images/nearby-icon.png\" alt=\"trainasugo\">\r\n                                            </div>\r\n                                            <span>Nearby</span>\r\n                                        </a>\r\n                                    </li>\r\n                                    <li>\r\n                                        <a href=\"#\">\r\n                                            <div class=\"inline-list\">\r\n                                                <img src=\"./assets/images/mobile-icon.png\" alt=\"trainasugo\">\r\n                                            </div>\r\n                                            <span>Send to phone</span>\r\n                                        </a>\r\n                                    </li> -->\r\n                  <li>\r\n                    <!-- <a href=\"#\">\r\n                      <div class=\"inline-list\">\r\n                        <img src=\"./assets/images/share-icon.png\" alt=\"trainasugo\">\r\n                      </div>\r\n                      <span>Share</span>\r\n                    </a> -->\r\n                    <div class=\"inline-list\">\r\n                      <share-button button=\"facebook\" text=\"Share\" [showText]=\"false\" style=\"width:50px;\">\r\n                      </share-button>\r\n                      <!-- <span>Facebook</span> -->\r\n                    </div>\r\n\r\n                  </li>\r\n                  <li>\r\n                    <div class=\"inline-list\">\r\n                      <share-button button=\"twitter\" text=\"Tweet\" [showText]=\"false\"></share-button>\r\n                      <!-- <span>Twitter</span> -->\r\n                    </div>\r\n                  </li>\r\n\r\n                </ul>\r\n              </div>\r\n              <div class=\"section-subheader\">\r\n                <h2>Photos ({{placedet.photo.length}})</h2>\r\n                <div class=\"section-image\">\r\n                  <a href=\"#\" *ngIf=\"placedet.photo[0]!=2\">\r\n                    <img [src]=\"placedet.photo[0].img\" alt=\"trainasugo\">\r\n                  </a>\r\n                  <a href=\"#\" *ngIf=\"placedet.photo[0]!=1\">\r\n                    <img [src]=\"serverUrl+placedet.photo[0].img\" alt=\"trainasugo\">\r\n                  </a>\r\n                </div>\r\n                <!-- <button type=\"button\" class=\"btn btn-primary add-button\">\r\n                  <i class=\"fa fa-camera\"></i>\r\n                  Add a photo\r\n                </button> -->\r\n              </div>\r\n\r\n              <div class=\"thumbnail-gallery\" *ngIf=\"placedet.photo.length>0\">\r\n                <h2>All Photos</h2>\r\n                <div class=\"all-gallery-image\">\r\n                  <div class=\"row\">\r\n                    <div class=\"col-md-4 col-sm-4 col-4\" *ngFor=\"let imgs of placedet.photo\">\r\n                      <a href=\"#\" *ngIf=\"imgs.types!=2\">\r\n                        <img class=\"img-fluid\" [src]=\"imgs.img\" alt=\"trainasyougo\">\r\n                      </a>\r\n                      <a href=\"#\" *ngIf=\"imgs.types!=1\">\r\n                        <img class=\"img-fluid\" [src]=\"serverUrl+imgs.img\" alt=\"trainasyougo\">\r\n                      </a>\r\n                    </div>\r\n\r\n                  </div>\r\n                </div>\r\n\r\n              </div>\r\n\r\n\r\n            </div>\r\n            <!-- LIST-Details -->\r\n          </div>\r\n\r\n          <!-- Details-Result-Box -->\r\n        </div>\r\n        <div class=\"btm-fixed-category-slider text-center\">\r\n\r\n          <owl-carousel-o [options]=\"customOptions\">\r\n\r\n            <ng-container *ngFor=\"let result of output; let j = index\">\r\n              <ng-template carouselSlide>\r\n\r\n                <div class=\"item\">\r\n\r\n\r\n                  <div class=\"slider\" [ngClass]=\"changeActive[j]=='true'? 'active': 'inactive'\">\r\n                    <label class=\"btn btn-primary\" (click)=\"clickToChange(j)\">\r\n                      <h3>{{result.name}}</h3>\r\n                      <img class=\"img-check\" [src]=\"'https://aqueous-river-43130.herokuapp.com/'+result.img\"\r\n                        alt=\"trainasugo\">\r\n\r\n                      <!-- <p>0 Listing</p> -->\r\n                      <!-- <input type=\"checkbox\" name=\"chk1\" id=\"item4\" value=\"val1\" class=\"hidden\" autocomplete=\"off\"> -->\r\n                    </label>\r\n                  </div>\r\n\r\n                </div>\r\n\r\n\r\n              </ng-template>\r\n            </ng-container>\r\n\r\n          </owl-carousel-o>\r\n          <!-- <div class=\"category-carousel owl-carousel owl-theme\">\r\n                    <div class=\"item link\">\r\n                        <div class=\"slider\">\r\n                            <h3>Yoga</h3>\r\n                            <img src=\"./assets/images/yoga-icon.png\" alt=\"trainasugo\">\r\n                            <p>150 Listing</p>\r\n                        </div>\r\n                        <div class=\"mobile-bottom\">\r\n                            <h3>Yoga</h3>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"item link\">\r\n                        <div class=\"slider\">\r\n                            <h3>Boxing</h3>\r\n                            <img src=\"./assets/images/boxing-icon.png\" alt=\"trainasugo\">\r\n                            <p>100 Listing</p>\r\n                        </div>\r\n                        <div class=\"mobile-bottom\">\r\n                            <h3>Boxing</h3>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"item link\">\r\n                        <div class=\"slider\">\r\n                            <h3>Swimming</h3>\r\n                            <img src=\"./assets/images/swimming-icon.png\" alt=\"trainasugo\">\r\n                            <p>245 Listing</p>\r\n                        </div>\r\n                        <div class=\"mobile-bottom\">\r\n                            <h3>Swimming</h3>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"item link\">\r\n                        <div class=\"slider\">\r\n                            <h3>Crossfit</h3>\r\n                            <img src=\"./assets/images/crossfit-icon.png\" alt=\"trainasugo\">\r\n                            <p>25 Listing</p>\r\n                        </div>\r\n                        <div class=\"mobile-bottom\">\r\n                            <h3>Crossfit</h3>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"item link\">\r\n                        <div class=\"slider\">\r\n                            <h3>Pilates</h3>\r\n                            <img src=\"./assets/images/pilates-icon.png\" alt=\"trainasugo\">\r\n                            <p>50 Listing</p>\r\n                        </div>\r\n                        <div class=\"mobile-bottom\">\r\n                            <h3>Pilates</h3>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"item link\">\r\n                        <div class=\"slider\">\r\n                            <h3>Gymnastics</h3>\r\n                            <img src=\"./assets/images/gymnastics-icon.png\" alt=\"trainasugo\">\r\n                            <p>75 Listing</p>\r\n                        </div>\r\n                        <div class=\"mobile-bottom\">\r\n                            <h3>Gymnastics</h3>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"item link\">\r\n                        <div class=\"slider\">\r\n                            <h3>Kickboxing</h3>\r\n                            <img src=\"./assets/images/kickboxing-icon.png\" alt=\"trainasugo\">\r\n                            <p>125 Listing</p>\r\n                        </div>\r\n                        <div class=\"mobile-bottom\">\r\n                            <h3>Kickboxing</h3>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"item link\">\r\n                        <div class=\"slider\">\r\n                            <h3>Jiu Jitsu</h3>\r\n                            <img src=\"./assets/images/jiu-jitsu-icon.png\" alt=\"trainasugo\">\r\n                            <p>100 Listing</p>\r\n                        </div>\r\n                        <div class=\"mobile-bottom\">\r\n                            <h3>Jiu Jitsu</h3>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"item link\">\r\n                        <div class=\"slider\">\r\n                            <h3>Strength</h3>\r\n                            <img src=\"./assets/images/strength-conditioning-icon.png\" alt=\"trainasugo\">\r\n                            <p>200 Listing</p>\r\n                        </div>\r\n                        <div class=\"mobile-bottom\">\r\n                            <h3>Strength</h3>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"item link\">\r\n                        <div class=\"slider\">\r\n                            <h3>Zumba</h3>\r\n                            <img src=\"./assets/images/zumba-icon.png\" alt=\"trainasugo\">\r\n                            <p>105 Listing</p>\r\n                        </div>\r\n                        <div class=\"mobile-bottom\">\r\n                            <h3>Zumba</h3>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"item link\">\r\n                        <div class=\"slider\">\r\n                            <h3>Spinning</h3>\r\n                            <img src=\"./assets/images/spinning-icon.png\" alt=\"trainasugo\">\r\n                            <p>75 Listing</p>\r\n                        </div>\r\n                        <div class=\"mobile-bottom\">\r\n                            <h3>Spinning</h3>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"item link\">\r\n                        <div class=\"slider\">\r\n                            <h3>Climbing</h3>\r\n                            <img src=\"./assets/images/climbing-icon.png\" alt=\"trainasugo\">\r\n                            <p>50 Listing</p>\r\n                        </div>\r\n                        <div class=\"mobile-bottom\">\r\n                            <h3>Climbing</h3>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"item link\">\r\n                        <div class=\"slider\">\r\n                            <h3>Tennis</h3>\r\n                            <img src=\"./assets/images/tennis-icon.png\" alt=\"trainasugo\">\r\n                            <p>90 Listing</p>\r\n                        </div>\r\n                        <div class=\"mobile-bottom\">\r\n                            <h3>Tennis</h3>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"item link\">\r\n                        <div class=\"slider\">\r\n                            <h3>Golf</h3>\r\n                            <img src=\"./assets/images/golf-icon.png\" alt=\"trainasugo\">\r\n                            <p>145 Listing</p>\r\n                        </div>\r\n                        <div class=\"mobile-bottom\">\r\n                            <h3>Golf</h3>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"item link\">\r\n                        <div class=\"slider\">\r\n                            <h3>Squash</h3>\r\n                            <img src=\"./assets/images/squash-icon.png\" alt=\"trainasugo\">\r\n                            <p>215 Listing</p>\r\n                        </div>\r\n                        <div class=\"mobile-bottom\">\r\n                            <h3>Squash</h3>\r\n                        </div>\r\n                    </div>\r\n                </div> -->\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-3\" *ngIf=\"partners.length>0\">\r\n        <aside>\r\n          <div class=\"right-sidebar-panel\">\r\n            <!-- card-1 -->\r\n            <div class=\"card\" *ngFor=\"let p of partners;let i = index;\">\r\n              <div class=\"card-body\">\r\n                <h5 class=\"card-title\">{{p.name}}</h5>\r\n                <div class=\"image-box\">\r\n                  <img class=\"img-fluid\" [src]=\"p.photo[0].img\" alt=\"trainasugo\">\r\n                </div>\r\n                <div class=\"address-panel\">\r\n                  <span>\r\n                    <i class=\"fa fa-map-marker\"></i>\r\n                  </span>\r\n                  <p>{{p.formatted_address}}</p>\r\n                </div>\r\n                <div class=\"address-panel\">\r\n                  <span>\r\n                    <i class=\"fa fa-clock-o\"></i>\r\n                  </span>\r\n                  <p>{{p.opening_hours}}</p>\r\n                </div>\r\n                <div class=\"address-panel\">\r\n                  <span>\r\n                    <i class=\"fa fa-tag\"></i>\r\n                  </span>\r\n                  <p>Price: {{p.price}}</p>\r\n                </div>\r\n                <!-- <i class=\"fa fa-bars\"></i> -->\r\n                <div class=\"link-line\">\r\n                  <div class=\"row\">\r\n                    <!-- <div class=\"col-md-3 col-sm-3 col-3\">\r\n                      <button (click)=\"showhide(i)\" ng-model=\"show\"><i class=\"fa fa-clock-o\"></i>24/7</button>\r\n                    </div> -->\r\n                    <div class=\"col-md-9 col-sm-9 col-9\">\r\n                      <ul class=\"side\" id=\"divshow\">\r\n                        <li>\r\n                          <a href=\"{{p.website_address}}\" target=\"_blank\">\r\n                            <i class=\"fa fa-globe\"></i>Website\r\n                          </a>\r\n                        </li>\r\n                        <li>\r\n                          <a href=\"#\" (click)=\"showhide(i,p.place_id)\"\r\n                            [ngClass]=\"(allfavs[p.place_id]=='1')?'active':''\">\r\n                            <i class=\"fa fa-heart-o\"></i>Favorite\r\n                          </a>\r\n                        </li>\r\n                        <li>\r\n                          <a href=\"tel:{{p.phone_number}}\">\r\n                            <i class=\"fa fa-phone\"></i>Phone\r\n                          </a>\r\n                        </li>\r\n                      </ul>\r\n                      <div class=\"popup-msg\" *ngIf=\"show[i] && user_det==null\">\r\n                        <!-- <form> -->\r\n                        <div class=\"row\">\r\n                          <div class=\"col-md-8 col-sm-8 col-8\">\r\n                            <div class=\"form-group\">\r\n                              <input type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\"\r\n                                aria-describedby=\"emailHelp\" placeholder=\"Enter email\" [(ngModel)]=\"email\">\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"col-md-4 col-sm-4 col-4\">\r\n                            <button type=\"submit\" class=\"btn btn-primary msg-btn\"\r\n                              (click)=\"fav(i,p.place_id)\">Submit</button>\r\n                          </div>\r\n                        </div>\r\n                        <!-- </form> -->\r\n                      </div>\r\n                    </div>\r\n                    <!-- <div class=\"col-md-3 col-sm-3 col-3\">\r\n                      <div class=\"like-share\">\r\n                          <p>4 Favorites</p>\r\n                      </div>\r\n                    </div> -->\r\n                  </div>\r\n                  <!-- <ul class=\"row side\">\r\n                    <li class=\"col-md-3 col-sm-3 col-3\">\r\n                      <a href=\"#\">\r\n                        <i class=\"fa fa-globe\"></i>Website\r\n                      </a>\r\n                    </li>\r\n                    <li class=\"col-md-3 col-sm-3 col-3\">\r\n                      <a href=\"#\">\r\n                        <i class=\"fa fa-heart-o\"></i>Favorite\r\n                      </a>\r\n                    </li>\r\n                    <li class=\"col-md-3 col-sm-3 col-3\">\r\n                      <a href=\"#\">\r\n                        <i class=\"fa fa-phone\"></i>Phone\r\n                      </a>\r\n                    </li>\r\n                    <li class=\"col-md-3 col-sm-3 col-3\">\r\n                      <a href=\"#\">\r\n                        <i class=\"fa fa-clock-o\"></i>24/7\r\n                      </a>\r\n                    </li>\r\n                  </ul> -->\r\n                </div>\r\n                <div class=\"like-share\">\r\n                  <p>{{((favcnt[p.place_id]!=null)?favcnt[p.place_id]:0)}} Favorites</p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n<!-- Begin Mailchimp Signup Form -->\r\n<div id=\"mc_embed_signup\">\r\n  <form action=\"https://gmail.us20.list-manage.com/subscribe/post?u=0698dcd5b2d6210ffd4edfbe5&amp;id=0a618f0d1b\" method=\"post\" id=\"mc-embedded-subscribe-form\" name=\"mc-embedded-subscribe-form\" class=\"validate\" target=\"_blank\" novalidate>\r\n      <div id=\"mc_embed_signup_scroll\">\r\n  <label for=\"mce-EMAIL\">Subscribe for great content</label>\r\n  <input type=\"email\" value=\"\" name=\"EMAIL\" class=\"email\" id=\"mce-EMAIL\" placeholder=\"email address\" required>\r\n      <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->\r\n      <div style=\"position: absolute; left: -5000px;\" aria-hidden=\"true\"><input type=\"text\" name=\"b_0698dcd5b2d6210ffd4edfbe5_0a618f0d1b\" tabindex=\"-1\" value=\"\"></div>\r\n      <div class=\"clear\"><input type=\"submit\" value=\"Subscribe\" name=\"subscribe\" id=\"mc-embedded-subscribe\" class=\"button\"></div>\r\n      </div>\r\n  </form>\r\n  </div>\r\n  \r\n  <!--End mc_embed_signup-->\r\n          </div>\r\n          \r\n        </aside>\r\n        \r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

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
        this.dropdownList = [];
        this.selectedItems = [];
        this.dropdownSettings = {};
    }
    ngOnInit() {
        this.loaderService.status.subscribe((val) => {
            this.showLoader = val;
        });
        this.dropdownList = [
            { item_id: 1, item_text: 'Mumbai' },
            { item_id: 2, item_text: 'Bangaluru' },
            { item_id: 3, item_text: 'Pune' },
            { item_id: 4, item_text: 'Navsari' },
            { item_id: 5, item_text: 'New Delhi' }
        ];
        this.selectedItems = [
            { item_id: 3, item_text: 'Pune' },
            { item_id: 4, item_text: 'Navsari' }
        ];
        this.dropdownSettings = {
            singleSelection: false,
            idField: 'item_id',
            textField: 'item_text',
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            itemsShowLimit: 3,
            allowSearchFilter: true
        };
    }
    onItemSelect(item) {
        console.log(item);
    }
    onSelectAll(items) {
        console.log(items);
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
/* harmony import */ var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-google-places-autocomplete */ "./node_modules/ngx-google-places-autocomplete/bundles/ngx-google-places-autocomplete.umd.js");
/* harmony import */ var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var ng_multiselect_dropdown_angular7__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-multiselect-dropdown-angular7 */ "./node_modules/ng-multiselect-dropdown-angular7/fesm2015/ng-multiselect-dropdown-angular7.js");
/* harmony import */ var _ngx_share_button__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ngx-share/button */ "./node_modules/@ngx-share/button/fesm2015/ngx-share-button.js");




















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
            _ngx_share_button__WEBPACK_IMPORTED_MODULE_19__["ShareButtonModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
            ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_10__["CarouselModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
            ng_starrating__WEBPACK_IMPORTED_MODULE_16__["RatingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"],
            ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_17__["GooglePlaceModule"],
            ng_multiselect_dropdown_angular7__WEBPACK_IMPORTED_MODULE_18__["NgMultiSelectDropDownModule"].forRoot(),
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

module.exports = ".active{\n  display: block;  \n}\n.inactive{\n    display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0FBQ2hCO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWN0aXZle1xuICBkaXNwbGF5OiBibG9jazsgIFxufVxuLmluYWN0aXZle1xuICAgIGRpc3BsYXk6IG5vbmU7XG59Il19 */"

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
        this.place_id = "0";
        this.dropdownList = [];
        this.selectedItems = [];
        this.selItems = [];
        this.dropdownSettings = {};
        this.result = [];
        this.user_det = [];
        this.current_loc = "";
        this.closestatus = true;
        this.dropdownList = [
            { _id: 1, name: 'Mumbai' },
            { _id: '5d338abd7ae3a96e889c5793', name: 'Pune' },
            { _id: 4, name: 'Navsari' },
            { _id: 5, name: 'New Delhi' }
        ];
        this.dropdownSettings = {
            singleSelection: false,
            enableCheckAll: false,
            idField: '_id',
            textField: 'name',
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            itemsShowLimit: 3,
            allowSearchFilter: true
        };
    }
    onClickSubmit(data) {
        if (this.innerWidth <= 400)
            this.closestatus = false;
        this.loaderService.display(true);
        let distance = this.nameInput.nativeElement.value;
        console.log(data);
        console.log(this.lat);
        console.log(this.selectedItems.sort());
        //this.data.changecathead(this.selectedItems);
        this.httpclient.post(this.serverUrl + 'placerecords', { distance: distance, lat: this.lat, lng: this.lng, cat: this.selectedItems.sort(), place_id: '' }).subscribe(datas => {
            this.loaderService.display(false);
            //this.closestatus = false;
            console.log(datas);
            this.result = datas;
            this.data.changeMessage(datas);
            //this.closestatus = false;
        }, error => {
            console.log("Rrror", error);
        });
    }
    currentloc() {
        window.location.reload();
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
    handleAddressChange(e) {
        console.log(e.geometry.location.lat());
        let loc = {
            'lat': e.geometry.location.lat(),
            'lng': e.geometry.location.lng()
        };
        this.lat = e.geometry.location.lat();
        this.lng = e.geometry.location.lng();
        this.place_id = e.name;
        this.data.changelatlng(loc);
        //this.onClickSubmit({distance:'20km'});
        this.loaderService.display(true);
        //this.data.changecathead(this.selectedItems);
        this.httpclient.post(this.serverUrl + 'placerecords', { distance: '20km', lat: this.lat, lng: this.lng, cat: this.selectedItems.sort(), place_id: '' }).subscribe(datas => {
            this.loaderService.display(false);
            //this.closestatus = false;
            console.log(datas);
            this.result = datas;
            this.data.changeMessage(datas);
            //this.closestatus = false;
        }, error => {
            console.log("Rrror", error);
        });
    }
    onItemSelect(event) {
        //console.log(event);
        this.selectedItems.push(event._id);
        this.data.changecathead(event._id);
    }
    onDeSelect(event) {
        //console.log(event);
        this.data.changecathead(event._id);
        let selectedItems = this.selectedItems.filter(function (e) {
            return e != event._id;
        });
        //console.log(selectedItems);
        //if (selectedItems.length) {
        this.selectedItems = selectedItems;
        //}
    }
    logout() {
        localStorage.clear();
        this.data.userdet('');
        window.location.reload();
    }
    onSelectAll(event) {
        //console.log(event);
    }
    close() {
        this.closestatus = false;
    }
    open_search_bar() {
        this.closestatus = true;
    }
    ngOnInit() {
        this.innerWidth = window.innerWidth;
        //alert(this.innerWidth);
        this.user_det = JSON.parse(localStorage.getItem("user_det"));
        this.data.currentMessagesssss.subscribe((message) => {
            console.log(localStorage.getItem("user_det"));
            this.user_det = JSON.parse(localStorage.getItem("user_det"));
        });
        this.getLocation();
        this.data.currentMessages.subscribe((message) => {
            //console.log(message);
            this.current_loc = message;
        });
        this.httpclient.get(this.serverUrl + 'category/api-category').subscribe(data => {
            this.loaderService.display(false);
            //console.log("suman99", data);
            //this.outputs = data;
            this.dropdownList = data;
            this.dropdownSettings = {
                singleSelection: false,
                idField: '_id',
                textField: 'name',
                selectAllText: 'Select All',
                unSelectAllText: 'UnSelect All',
                itemsShowLimit: 3,
                allowSearchFilter: false
            };
            //this.selItems =  this.data.currentMessagesss.toPromise();
            this.data.currentMessagesss.subscribe((msgg) => {
                // this.selItems = [{_id: "5d338abd7ae3a96e889c5793", name: "Yoga", img: "yoga-icon.png", __v: 0}];
                //this.selItems = [];
                console.log(localStorage.getItem("cat"));
                console.log(msgg);
                //this.selItems = [];
                this.selItems = JSON.parse(localStorage.getItem("cat"));
                let all = [];
                if (this.selItems.length > 0) {
                    for (let j = 0; j < this.selItems.length; j++) {
                        all[j] = this.selItems[j]._id;
                    }
                }
                this.selectedItems = all;
                this.loaderService.display(true);
                let distance = this.nameInput.nativeElement.value;
                console.log(data);
                console.log(this.lat);
                console.log(this.selectedItems.sort());
                //this.data.changecathead(this.selectedItems);
                this.httpclient.post(this.serverUrl + 'placerecords', { distance: distance, lat: this.lat, lng: this.lng, cat: this.selectedItems.sort(), place_id: '' }).subscribe(datas => {
                    this.loaderService.display(false);
                    //this.closestatus = false;
                    console.log(datas);
                    this.result = datas;
                    this.data.changeMessage(datas);
                    //this.closestatus = false;
                }, error => {
                    console.log("Rrror", error);
                });
                // this.selItems = [
                //   {_id: "5d338abd7ae3a96e889c5793", name: "Yoga", img: "yoga-icon.png", __v: 0},
                // {_id: "5d338ae07ae3a96e889c5794", name: "Strength", img: "strength-conditioning-icon.png", __v: 0},
                // {_id: "5d338b147ae3a96e889c5795", name: "Zumba", img: "zumba-icon.png", __v: 0},
                // {_id: "5d338b547ae3a96e889c5796", name: "Tennis", img: "tennis-icon.png", __v: 0},
                // {_id: "5d338b6d7ae3a96e889c5797", name: "Golf", img: "golf-icon.png", __v: 0},
                // {_id: "5d338b857ae3a96e889c5798", name: "Squash", img: "squash-icon.png", __v: 0},
                // {_id: "5d338bb27ae3a96e889c579a", name: "Swimming", img: "swimming-icon.png", __v: 0},
                // {_id: "5d338bcb7ae3a96e889c579b", name: "Pilates", img: "pilates-icon.png", __v: 0},
                // {_id: "5d338bdb7ae3a96e889c579c", name: "Crossfit", img: "crossfit-icon.png", __v: 0},
                // {_id: "5d338bf97ae3a96e889c579d", name: "Gymnastics", img: "gymnastics-icon.png", __v: 0},
                //   {_id: "5d338c107ae3a96e889c579e", name: "Kickboxing", img: "kickboxing-icon.png", __v: 0},
                //   {_id: "5d338c317ae3a96e889c579f", name: "Jiu jitsu", img: "jiu-jitsu-icon.png", __v: 0},
                //   {_id: "5d338c697ae3a96e889c57a0", name: "Spinning", img: "spinning-icon.png", __v: 0},
                //   {_id: "5d338c957ae3a96e889c57a1", name: "Climbing", img: "climbing-icon.png", __v: 0},
                //   {_id: "5d33b8f75afb5a50381e700c", name: "Boxing", img: "boxing-icon.png", __v: 0}
                // ];
                // if(msgg.length>0){
                //   for (let i =0; i<this.dropdownList.length; i++) {
                //     //if(msgg[i].name!=undefined){
                //       if (this.dropdownList[i].name == msgg[0].name) {
                //           // console.log(this.dropdownList[i].name);
                //           //this.selItems.push(this.dropdownList[i]);
                //         }
                //       //}
                //   }
                // }
                // for (let i =0; i<this.dropdownList.length; i++) {
                //   console.log('----->>>', this.dropdownList[i]);
                //   if (this.dropdownList[i].name == msgg[0].name) {
                //     // console.log(this.dropdownList[i].name);
                //     //this.selItems = this.dropdownList[i];
                //   }
                // }
                console.log("Suman", this.selItems);
            });
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
        this.messageSourcess = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]('');
        this.messageSourcesss = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]('');
        this.messageSourcessss = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]('');
        this.messageSourcesssss = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]('');
        this.currentMessage = this.messageSource.asObservable();
        this.currentMessages = this.messageSources.asObservable();
        this.currentMessagess = this.messageSourcess.asObservable();
        this.currentMessagesss = this.messageSourcesss.asObservable();
        this.currentMessagessss = this.messageSourcessss.asObservable();
        this.currentMessagesssss = this.messageSourcesssss.asObservable();
    }
    changeMessage(message) {
        this.messageSource.next(message);
    }
    changehead(msg) {
        this.messageSources.next(msg);
    }
    changelatlng(msg) {
        this.messageSourcess.next(msg);
    }
    changecat(msgg) {
        this.messageSourcesss.next(msgg);
    }
    changecathead(msgg) {
        this.messageSourcessss.next(msgg);
    }
    userdet(msgg) {
        this.messageSourcesssss.next(msgg);
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

module.exports = "agm-map {\r\n    height: 600px;\r\n  }\r\n\r\n  .list-details {\r\n    display: none;\r\n    }\r\n\r\n  .list-items{\r\n      display:none;\r\n    }\r\n\r\n  .link-line ul li a.active {\r\n      background: #8f8f8f;\r\n    }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxhQUFhO0lBQ2I7O0VBRUE7TUFDRSxZQUFZO0lBQ2Q7O0VBRUE7TUFDRSxtQkFBbUI7SUFDckIiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImFnbS1tYXAge1xyXG4gICAgaGVpZ2h0OiA2MDBweDtcclxuICB9XHJcblxyXG4gIC5saXN0LWRldGFpbHMge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICAubGlzdC1pdGVtc3tcclxuICAgICAgZGlzcGxheTpub25lO1xyXG4gICAgfVxyXG5cclxuICAgIC5saW5rLWxpbmUgdWwgbGkgYS5hY3RpdmUge1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjOGY4ZjhmO1xyXG4gICAgfSJdfQ== */"

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
        this.email = "";
        this.chk1 = [];
        this.favcnt = [];
        this.placeList = [];
        this.partners = [];
        this.allfavs = [];
        this.liststatus = true;
        this.detstatus = false;
        this.markers = [];
        this.icon = "../assets/images/blue-location.png";
        this.flag = "../assets/images/red-location.png";
        this.placedet = { photo: [{ img: "" }] };
        this.show = [];
        this.selectedItem = [];
        this.selItem = [];
        this.user_det = {};
        this.current_address = "";
        this.customOptions = {
            loop: true,
            autoplay: true,
            mouseDrag: true,
            touchDrag: false,
            pullDrag: false,
            margin: 10,
            autoWidth: true,
            navText: ["‹", "›"],
            dots: false,
            navSpeed: 700,
            responsive: {
                0: {
                    items: 3
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
    // clickedMarker(label: string, index: number) {
    //   console.log(`clicked the marker: ${label || index}`)
    // }
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
        localStorage.setItem("cat", JSON.stringify([]));
        this.getLocation();
        this.loaderService.display(true);
        this.httpclient.get(this.serverUrl + 'category/api-category').subscribe(data => {
            this.loaderService.display(false);
            console.log(data);
            this.output = data;
        }, error => {
            console.log("Rrror", error);
        });
        ;
        this.partnerfn();
        this.data.currentMessage.subscribe((message) => {
            console.log(message);
            this.previous = false;
            this.placeList = message;
            this.markers = [];
            if (this.placeList.length > 0) {
                //this.placeList.forEach((key : any, val: any) => {
                for (let i = 0; i < this.placeList.length; i++) {
                    //console.log(key);
                    this.markers.push({
                        lat: this.placeList[i].lat,
                        lng: this.placeList[i].lng,
                        label: this.placeList[i].name,
                        opening_hours: this.placeList[i].opening_hours,
                        rating: this.placeList[i].rating,
                        formatted_address: this.placeList[i].formatted_address,
                        website_address: this.placeList[i].website_address,
                        price: this.placeList[i].price,
                        img: this.placeList[i].photo[0].img
                    });
                }
                //});
            }
        });
        this.data.currentMessagess.subscribe((message) => {
            this.lat = message['lat'];
            this.lng = message['lng'];
        });
        this.data.currentMessagessss.subscribe((msggg) => {
            console.log(msggg);
            localStorage.setItem("cat", JSON.stringify([]));
            //this.selectedItem = [];
            //this.selectedItem = msggg;
            let index = this.output.findIndex(x => x._id === msggg);
            //alert(index);
            //   let arr = this.output[index]._id;
            //let arr1 = this.output[index];
            //   this.changeActive[index] = ((this.changeActive[index] == 'true')?'false':'true');
            // if(this.changeActive[index] == 'true'){
            //   this.selectedItem.push(arr);
            //   this.selItem.push(arr1);
            //   let selitem:any = this.selItem;
            //   console.log(selitem);
            //   this.selItem = selitem;
            // }else{
            //   //alert()
            //   let selectedItems:any = this.selectedItem.filter(function (e) {
            //     return e != arr
            //   });
            //   this.selectedItem = selectedItems;
            //   let selItems:any = this.selItem.filter(function (e) {
            //     return e._id != arr1._id
            //   });
            //   this.selItem = selItems;
            // }
            // localStorage.setItem("cat",JSON.stringify(this.selItem));
            //this.clickToChange(index);
            this.changeActive[index] = ((this.changeActive[index] == 'true') ? 'false' : 'true');
            if (this.changeActive[index] == 'true') {
                this.selectedItem.push(this.output[index]);
                //this.selItem.push(this.output[index]);
            }
            else {
                let selectedItems = this.selectedItem.filter(function (e) {
                    return e != msggg;
                });
                this.selectedItem = selectedItems;
                //     let selItems:any = this.output[index].filter(function (e) {
                //   return e._id != this.output[index]._id
                // });
                // this.selItem = selItems;
            }
        });
    }
    partnerfn() {
        this.httpclient.get(this.serverUrl + 'partners').subscribe(datas => {
            this.partners = datas;
            this.favuser();
        }, error => {
            console.log("Rrror", error);
        });
    }
    favuser() {
        this.data.currentMessagesssss.subscribe((message) => {
            console.log(localStorage.getItem("user_det"));
            let user_det = JSON.parse(localStorage.getItem("user_det"));
            this.allfavs = [];
            if (user_det != null) {
                this.httpclient.post(this.serverUrl + 'users/favuser', { user_id: user_det._id }).subscribe((datas) => {
                    console.log(datas);
                    if (datas.length > 0) {
                        for (let k = 0; k < datas.length; k++) {
                            this.allfavs[datas[k].place_id] = 1;
                        }
                    }
                    else {
                        this.allfavs = [];
                    }
                }, error => {
                    console.log("Rrror", error);
                });
            }
            this.favcount();
        });
    }
    google_map_directions(mylat, mylon) {
        window.open('https://www.google.com/maps/dir/' + this.lat + ',' + this.lng + '/' + mylat + ',' + mylon, '_system');
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
    fav(index, place_id) {
        console.log(this.allfavs);
        let fav = ((this.allfavs[place_id]) != null ? 0 : 1);
        //alert(fav);
        if (this.email != "") {
            this.loaderService.display(true);
            this.httpclient.post(this.serverUrl + 'users/genuser', { email: this.email, place_id: place_id, fav: fav }).subscribe(datas => {
                console.log(datas);
                this.loaderService.display(false);
                localStorage.setItem("user_det", JSON.stringify(datas));
                this.data.userdet(JSON.stringify(datas));
                this.show[index] = false;
                this.user_det = datas;
                //window.location.reload();
                this.favuser();
            }, error => {
                console.log("Rrror", error);
            });
        }
    }
    showhide(index, place_id) {
        console.log(this.allfavs);
        this.show[index] = !this.show[index];
        let fav = ((this.allfavs[place_id]) != null ? 0 : 1);
        //alert(JSON.stringify(this.user_det));
        //if(this.user_det!=undefined){
        this.data.currentMessagesssss.subscribe((message) => {
            console.log(localStorage.getItem("user_det"));
            this.user_det = JSON.parse(localStorage.getItem("user_det"));
            //this.loaderService.display(true);
            this.httpclient.post(this.serverUrl + 'users/genuser', { email: this.user_det['email'], place_id: place_id, fav: fav }).subscribe(datas => {
                console.log(datas);
                this.loaderService.display(false);
                this.show[index] = false;
                //window.location.reload();
                //this.user_det = datas;
                //alert();
                this.favuser();
            }, error => {
                console.log("Rrror", error);
            });
        });
        //}
    }
    favcount() {
        this.httpclient.get(this.serverUrl + 'users/favcount').subscribe((datas) => {
            this.favcnt = [];
            if (datas.length > 0) {
                for (let p = 0; p < datas.length; p++) {
                    this.favcnt[datas[p]._id] = datas[p].total;
                }
            }
        }, error => {
            console.log("Rrror", error);
        });
    }
    clickToChange(index) {
        let arr = this.output[index]._id;
        let arr1 = this.output;
        this.selItem = [];
        this.selectedItem = [];
        this.loaderService.display(true);
        this.changeActive[index] = ((this.changeActive[index] == 'true') ? 'false' : 'true');
        for (let i = 0; i < this.changeActive.length; i++) {
            if (this.changeActive[i] == 'true') {
                this.selectedItem.push(arr);
                this.selItem.push(arr1[i]);
            }
            else {
                let selectedItems = this.selectedItem.filter(function (e) {
                    return e != arr;
                });
                this.selectedItem = selectedItems;
                let selItems = this.selItem.filter(function (e) {
                    return e._id != arr1[i]._id;
                });
                this.selItem = selItems;
            }
        }
        console.log('>>>>', this.selItem);
        localStorage.setItem("cat", JSON.stringify(this.selItem));
        this.data.changecat(this.selItem);
        // this.httpclient.post(this.serverUrl + 'placerecords', {distance: '20km', lat: this.lat, lng: this.lng, cat: this.selectedItem.sort(), place_id: 0 }).subscribe(
        //   datas => {
        //     this.loaderService.display(false);
        //     console.log(datas);
        //     //this.result = datas;
        //     this.data.changeMessage(datas);
        //   },
        //   error => {
        //     console.log("Rrror", error);
        //   }
        // );
    }
    clickToChange1(index) {
        //alert(index)
        // this.changeActive = []
        //this.selItem = [];
        console.log(this.changeActive);
        let arr = this.output[index]._id;
        let arr1 = this.output[index];
        this.loaderService.display(true);
        this.changeActive[index] = ((this.changeActive[index] == 'true') ? 'false' : 'true');
        if (this.changeActive[index] == 'true') {
            this.selectedItem.push(arr);
            this.selItem.push(arr1);
            let selitem = this.selItem;
            console.log(selitem);
            this.selItem = selitem;
        }
        else {
            localStorage.setItem("cat", JSON.stringify([]));
            //alert()
            let selectedItems = this.selectedItem.filter(function (e) {
                return e != arr;
            });
            this.selectedItem = selectedItems;
            let selItems = this.selItem.filter(function (e) {
                return e._id != arr1._id;
            });
            this.selItem = selItems;
        }
        console.log(this.selItem);
        localStorage.setItem("cat", JSON.stringify(this.selItem));
        this.data.changecat(this.selItem);
        //this.data.changecat(this.selItem);
        //this.data.changecat([]);
        this.httpclient.post(this.serverUrl + 'placerecords', { distance: '20km', lat: this.lat, lng: this.lng, cat: this.selectedItem.sort(), place_id: 0 }).subscribe(datas => {
            this.loaderService.display(false);
            console.log(datas);
            //this.result = datas;
            this.data.changeMessage(datas);
        }, error => {
            console.log("Rrror", error);
        });
        console.log(this.changeActive[index]);
        // console.log(this.changeActive);
    }
    clickedMarker(infowindow) {
        if (this.previous) {
            this.previous.close();
        }
        this.previous = infowindow;
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
                    this.getAddress(this.lat, this.lng);
                    this.httpclient.post(this.serverUrl + 'placerecords', { distance: "20km", lat: this.lat, lng: this.lng, cat: [], place_id: '0' }).subscribe(datas => {
                        this.loaderService.display(false);
                        this.placeList = datas;
                        this.markers = [];
                        this.placeList.forEach((key, val) => {
                            //console.log(key);
                            this.markers.push({
                                lat: key.lat,
                                lng: key.lng,
                                label: key.name,
                                opening_hours: key.opening_hours,
                                rating: key.rating,
                                formatted_address: key.formatted_address,
                                website_address: key.website_address,
                                price: key.price,
                                img: key.photo[0].img
                            });
                        });
                        this.mapReady();
                    }, error => {
                        console.log("Rrror", error);
                    });
                }
            }, (error) => {
                this.httpclient.post(this.serverUrl + 'placerecords', { distance: "20km", lat: this.lat, lng: this.lng, cat: [], place_id: '0' }).subscribe(datas => {
                    this.loaderService.display(false);
                    this.placeList = datas;
                    this.markers = [];
                    this.placeList.forEach((key, val) => {
                        //console.log(key);
                        this.markers.push({
                            lat: key.lat,
                            lng: key.lng,
                            label: key.name,
                            opening_hours: key.opening_hours,
                            rating: key.rating,
                            formatted_address: key.formatted_address,
                            img: key.photo[0].img
                        });
                    });
                }, error => {
                    console.log("Rrror", error);
                });
            }, { maximumAge: 0, timeout: 60000, enableHighAccuracy: true });
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
    // baseUrl:'http://localhost:3000/'
    baseUrl: 'https://aqueous-river-43130.herokuapp.com/'
    //baseUrl:' http://localhost:3000/'
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

/***/ "./src/icons.ts":
/*!**********************!*\
  !*** ./src/icons.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons_faFacebookF__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons/faFacebookF */ "./node_modules/@fortawesome/free-brands-svg-icons/faFacebookF.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons_faFacebookF__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_brands_svg_icons_faFacebookF__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fortawesome_free_brands_svg_icons_faTwitter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons/faTwitter */ "./node_modules/@fortawesome/free-brands-svg-icons/faTwitter.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons_faTwitter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_brands_svg_icons_faTwitter__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_free_brands_svg_icons_faRedditAlien__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons/faRedditAlien */ "./node_modules/@fortawesome/free-brands-svg-icons/faRedditAlien.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons_faRedditAlien__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_brands_svg_icons_faRedditAlien__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fortawesome_free_brands_svg_icons_faLinkedinIn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons/faLinkedinIn */ "./node_modules/@fortawesome/free-brands-svg-icons/faLinkedinIn.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons_faLinkedinIn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_brands_svg_icons_faLinkedinIn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fortawesome_free_brands_svg_icons_faGooglePlusG__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons/faGooglePlusG */ "./node_modules/@fortawesome/free-brands-svg-icons/faGooglePlusG.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons_faGooglePlusG__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_brands_svg_icons_faGooglePlusG__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _fortawesome_free_brands_svg_icons_faTumblr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons/faTumblr */ "./node_modules/@fortawesome/free-brands-svg-icons/faTumblr.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons_faTumblr__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_brands_svg_icons_faTumblr__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _fortawesome_free_brands_svg_icons_faPinterestP__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons/faPinterestP */ "./node_modules/@fortawesome/free-brands-svg-icons/faPinterestP.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons_faPinterestP__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_brands_svg_icons_faPinterestP__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _fortawesome_free_brands_svg_icons_faWhatsapp__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons/faWhatsapp */ "./node_modules/@fortawesome/free-brands-svg-icons/faWhatsapp.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons_faWhatsapp__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_brands_svg_icons_faWhatsapp__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _fortawesome_free_brands_svg_icons_faVk__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons/faVk */ "./node_modules/@fortawesome/free-brands-svg-icons/faVk.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons_faVk__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_brands_svg_icons_faVk__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _fortawesome_free_brands_svg_icons_faFacebookMessenger__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons/faFacebookMessenger */ "./node_modules/@fortawesome/free-brands-svg-icons/faFacebookMessenger.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons_faFacebookMessenger__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_brands_svg_icons_faFacebookMessenger__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _fortawesome_free_brands_svg_icons_faTelegramPlane__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons/faTelegramPlane */ "./node_modules/@fortawesome/free-brands-svg-icons/faTelegramPlane.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons_faTelegramPlane__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_brands_svg_icons_faTelegramPlane__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _fortawesome_free_brands_svg_icons_faMix__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons/faMix */ "./node_modules/@fortawesome/free-brands-svg-icons/faMix.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons_faMix__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_brands_svg_icons_faMix__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _fortawesome_free_brands_svg_icons_faXing__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons/faXing */ "./node_modules/@fortawesome/free-brands-svg-icons/faXing.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons_faXing__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_brands_svg_icons_faXing__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _fortawesome_free_brands_svg_icons_faLine__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons/faLine */ "./node_modules/@fortawesome/free-brands-svg-icons/faLine.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons_faLine__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_brands_svg_icons_faLine__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _fortawesome_free_solid_svg_icons_faCommentAlt__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faCommentAlt */ "./node_modules/@fortawesome/free-solid-svg-icons/faCommentAlt.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons_faCommentAlt__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons_faCommentAlt__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _fortawesome_free_solid_svg_icons_faMinus__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faMinus */ "./node_modules/@fortawesome/free-solid-svg-icons/faMinus.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons_faMinus__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons_faMinus__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _fortawesome_free_solid_svg_icons_faEllipsisH__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faEllipsisH */ "./node_modules/@fortawesome/free-solid-svg-icons/faEllipsisH.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons_faEllipsisH__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons_faEllipsisH__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _fortawesome_free_solid_svg_icons_faLink__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faLink */ "./node_modules/@fortawesome/free-solid-svg-icons/faLink.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons_faLink__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons_faLink__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _fortawesome_free_solid_svg_icons_faExclamation__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faExclamation */ "./node_modules/@fortawesome/free-solid-svg-icons/faExclamation.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons_faExclamation__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons_faExclamation__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _fortawesome_free_solid_svg_icons_faPrint__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faPrint */ "./node_modules/@fortawesome/free-solid-svg-icons/faPrint.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons_faPrint__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons_faPrint__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _fortawesome_free_solid_svg_icons_faCheck__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faCheck */ "./node_modules/@fortawesome/free-solid-svg-icons/faCheck.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons_faCheck__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons_faCheck__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _fortawesome_free_solid_svg_icons_faEnvelope__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons/faEnvelope */ "./node_modules/@fortawesome/free-solid-svg-icons/faEnvelope.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons_faEnvelope__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_free_solid_svg_icons_faEnvelope__WEBPACK_IMPORTED_MODULE_22__);























const icons = [
    _fortawesome_free_brands_svg_icons_faFacebookF__WEBPACK_IMPORTED_MODULE_1__["faFacebookF"], _fortawesome_free_brands_svg_icons_faTwitter__WEBPACK_IMPORTED_MODULE_2__["faTwitter"], _fortawesome_free_brands_svg_icons_faLinkedinIn__WEBPACK_IMPORTED_MODULE_4__["faLinkedinIn"], _fortawesome_free_brands_svg_icons_faGooglePlusG__WEBPACK_IMPORTED_MODULE_5__["faGooglePlusG"], _fortawesome_free_brands_svg_icons_faPinterestP__WEBPACK_IMPORTED_MODULE_7__["faPinterestP"], _fortawesome_free_brands_svg_icons_faRedditAlien__WEBPACK_IMPORTED_MODULE_3__["faRedditAlien"], _fortawesome_free_brands_svg_icons_faTumblr__WEBPACK_IMPORTED_MODULE_6__["faTumblr"],
    _fortawesome_free_brands_svg_icons_faWhatsapp__WEBPACK_IMPORTED_MODULE_8__["faWhatsapp"], _fortawesome_free_brands_svg_icons_faVk__WEBPACK_IMPORTED_MODULE_9__["faVk"], _fortawesome_free_brands_svg_icons_faFacebookMessenger__WEBPACK_IMPORTED_MODULE_10__["faFacebookMessenger"], _fortawesome_free_brands_svg_icons_faTelegramPlane__WEBPACK_IMPORTED_MODULE_11__["faTelegramPlane"], _fortawesome_free_brands_svg_icons_faMix__WEBPACK_IMPORTED_MODULE_12__["faMix"], _fortawesome_free_brands_svg_icons_faXing__WEBPACK_IMPORTED_MODULE_13__["faXing"], _fortawesome_free_solid_svg_icons_faCommentAlt__WEBPACK_IMPORTED_MODULE_15__["faCommentAlt"], _fortawesome_free_brands_svg_icons_faLine__WEBPACK_IMPORTED_MODULE_14__["faLine"],
    _fortawesome_free_solid_svg_icons_faEnvelope__WEBPACK_IMPORTED_MODULE_22__["faEnvelope"], _fortawesome_free_solid_svg_icons_faCheck__WEBPACK_IMPORTED_MODULE_21__["faCheck"], _fortawesome_free_solid_svg_icons_faPrint__WEBPACK_IMPORTED_MODULE_20__["faPrint"], _fortawesome_free_solid_svg_icons_faExclamation__WEBPACK_IMPORTED_MODULE_19__["faExclamation"], _fortawesome_free_solid_svg_icons_faLink__WEBPACK_IMPORTED_MODULE_18__["faLink"], _fortawesome_free_solid_svg_icons_faEllipsisH__WEBPACK_IMPORTED_MODULE_17__["faEllipsisH"], _fortawesome_free_solid_svg_icons_faMinus__WEBPACK_IMPORTED_MODULE_16__["faMinus"]
];
_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_0__["library"].add(...icons);


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
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icons */ "./src/icons.ts");





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

module.exports = __webpack_require__(/*! /Users/parthosen/Documents/trainasyougo-angular7/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map