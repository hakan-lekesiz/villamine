
Feux.Map = {
    Props: {
        mainMapId: "map",
        markerZoom: 15,
        styles: [
            {
                "featureType": "all",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "saturation": 36
                    },
                    {
                        "color": "#dedede"
                    },
                    {
                        "lightness": 40
                    }
                ]
            },
            {
                "featureType": "all",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "visibility": "off"
                    },
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 16
                    }
                ]
            },
            {
                "featureType": "all",
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 20
                    }
                ]
            },
            {
                "featureType": "administrative",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 17
                    },
                    {
                        "weight": 1.2
                    }
                ]
            },
            {
                "featureType": "landscape",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 20
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 21
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "visibility": "on"
                    },
                    {
                        "color": "#000000"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "weight": "10.00"
                    },
                    {
                        "invert_lightness": true
                    },
                    {
                        "gamma": "7.24"
                    },
                    {
                        "lightness": "60"
                    },
                    {
                        "saturation": "66"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#ffffff"
                    },
                    {
                        "invert_lightness": true
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "on"
                    }
                ]
            },
            {
                "featureType": "poi.attraction",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "poi.business",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "poi.government",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "poi.medical",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "poi.place_of_worship",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "poi.school",
                "elementType": "all",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "poi.sports_complex",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "visibility": "on"
                    },
                    {
                        "color": "#d2cece"
                    },
                    {
                        "invert_lightness": true
                    },
                    {
                        "weight": "10.00"
                    }
                ]
            },
            {
                "featureType": "poi.sports_complex",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "visibility": "on"
                    },
                    {
                        "color": "#ffffff"
                    }
                ]
            },
            {
                "featureType": "poi.sports_complex",
                "elementType": "labels.text",
                "stylers": [
                    {
                        "visibility": "simplified"
                    }
                ]
            },
            {
                "featureType": "poi.sports_complex",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "visibility": "on"
                    },
                    {
                        "color": "#ff0000"
                    }
                ]
            },
            {
                "featureType": "poi.sports_complex",
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "gamma": "10.00"
                    },
                    {
                        "invert_lightness": true
                    },
                    {
                        "weight": "10.00"
                    },
                    {
                        "color": "#ffffff"
                    },
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "featureType": "poi.sports_complex",
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "on"
                    },
                    {
                        "weight": "5.10"
                    },
                    {
                        "gamma": "0.00"
                    },
                    {
                        "hue": "#ff0000"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.fill",
                "stylers": [
                    {
                        "color": "#393939"
                    },
                    {
                        "lightness": 17
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry.stroke",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 29
                    },
                    {
                        "weight": 0.2
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#1c1c1c"
                    },
                    {
                        "lightness": 18
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#343434"
                    },
                    {
                        "lightness": 16
                    }
                ]
            },
            {
                "featureType": "transit",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 19
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#000000"
                    },
                    {
                        "lightness": 17
                    }
                ]
            }
        ]
    },

    Elements: {
    },

    Current: {
        map: null,
    },

    ready: function () {
        Feux.Map.Actions.init();
    },

    Actions: {

        init: function () {
            Feux.Map.Current.data = googleMapData;
            Feux.Map.Helper.setElements();
            var elements = Feux.Map.Elements;
            if (elements.map) {
                Feux.Map.Actions.setupMap();
                Feux.Map.Actions.addMarker();
            }

        },
        setupMap: function () {
            var props = Feux.Map.Props;

            Feux.Map.Current.map = new google.maps.Map(Feux.Map.Elements.map, {
                center: { lat: Feux.Map.Current.data.centerLat, lng: Feux.Map.Current.data.centerLng },
                zoom: props.isMobile ? Feux.Map.Current.data.mobileZoom : Feux.Map.Current.data.zoom,
                mapTypeControl: false,
                styles: props.styles,
                fullscreenControl: false,
            });
        },
        addMarker: function () {

            for (var i = 0; i < markers.length; i++) {
                var m = markers[i];
                var content =
                    '<div class="info-box"><div class="c-unit-01">' +
                        '<img class="c-unit-01-A" src="' + m.img+'"/>' +
                        '<h4 class="c-unit-01-B">' + m.title + '</h4>' +
                        '<h4 class="c-unit-01-C">' + m.desc + '</h4>' +
                    '</div></div>';


                var locationInfowindow = new google.maps.InfoWindow({
                    content: content,
                });

                var marker = new google.maps.Marker({
                    position: new google.maps.LatLng(parseFloat(m.lat), parseFloat(m.lng)),
                    map: Feux.Map.Current.map,
                    icon: ".",
                    draggable: false,
                    infowindow: locationInfowindow
                });
                marker.infowindow.open(Feux.Map.Current.map, marker);
                 
            }
        },
    },

    Helper: {
        setElements: function () {
            var props = Feux.Map.Props;
            var elements = Feux.Map.Elements;

            elements.map = document.getElementById(props.mainMapId);

            var key = Feux.Base.Props.MediaQ.Curr.key;
            props.isMobile = key === "xs1" || key === "xs2";
        },
        
    }
};
