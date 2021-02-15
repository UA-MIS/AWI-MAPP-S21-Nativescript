

// import { Component, ElementRef, ViewChild} from '@angular/core';

// import {registerElement} from "@nativescript/angular";
// Important - must register MapView plugin in order to use in Angular templates
//import { MapViewBase } from 'nativescript-google-maps-sdk/map-view-common';
// import { MapView, Marker, Position } from 'nativescript-google-maps-sdk';


// //registerElement("MapView", () => require("nativescript-google-maps-sdk").MapView);
// registerElement('MapView', () => MapView);



// @Component({
//     selector: 'Location',
//     templateUrl: './location.component.html'
//   })
//   //implements OnInit 

//   export class LocationComponent {
    // let map: google.maps.Map;
    // const center: google.maps.LatLngLiteral = {lat: 30, lng: -110};
    
    // function initMap(): void {
    //   map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
    //     center,
    //     zoom: 8
    //   });
    // }
    // latitude =  -33.86;
    // longitude = 151.20;
    // zoom = 8;
    // minZoom = 0;
    // maxZoom = 22;
    // bearing = 0;
    // tilt = 0;
    // padding = [40, 40, 40, 40];
    // mapView: MapView;

    // lastCamera: String;

    // constructor() {
    // }

    //Map events
    // onMapReady(event) {
    //     console.log('Map Ready');

    //     this.mapView = event.object;

    //     console.log("Setting a marker...");

    //     var marker = new Marker();
    //     marker.position = Position.positionFromLatLng(-33.86, 151.20);
    //     marker.title = "Sydney";
    //     marker.snippet = "Australia";
    //     marker.userData = {index: 1};
    //     this.mapView.addMarker(marker);
    // }

    // onCoordinateTapped(args) {
    //     console.log("Coordinate Tapped, Lat: " + args.position.latitude + ", Lon: " + args.position.longitude, args);
    // }

    // onMarkerEvent(args) {
    //     console.log("Marker Event: '" + args.eventName
    //         + "' triggered on: " + args.marker.title
    //         + ", Lat: " + args.marker.position.latitude + ", Lon: " + args.marker.position.longitude, args);
    // }

    // onCameraChanged(args) {
    //     console.log("Camera changed: " + JSON.stringify(args.camera), JSON.stringify(args.camera) === this.lastCamera);
    //     this.lastCamera = JSON.stringify(args.camera);
    // }

    // onCameraMove(args) {
    //     console.log("Camera moving: " + JSON.stringify(args.camera));
    // }
  //}
