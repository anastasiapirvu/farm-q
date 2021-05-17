import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup,} from 'react-leaflet';
import L from "leaflet";
import { Button, Modal } from 'react-bootstrap';
import ProductDisplay from "./ProductDisplay";
import farmerData from "./FarmerData";
import wheat from './images/wheat.png';


function LeafletMap() {

    const [products, setProducts] = useState();

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


   // Custom wheat icons 
    let myIcon = new L.Icon ({
        iconUrl: wheat,
        iconSize: [50, 50],

        });

    // Checkout button   
    function resetTotal() {
        alert("Thank you for shopping locally");
    }

    
    
    return (

        <>
            <div className="col-sm col-md mb-2">
            <MapContainer center={[50.830, 4.34]} zoom={11} scrollWheelZoom={true}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
            // Check if the farmer data has prod property
            // Sets prop state in product

                {farmerData.map(frmr => { 
                    const myHandleShow = () => {
                        if ("products" in frmr) {
                        setProducts(frmr.products);
                        } else {
                        setProducts([]);
                        }
                        handleShow();
                        
                    }
                    return (
                    <Marker    
                        icon={myIcon}    
                        key={frmr.id}
                        position={[frmr.latitude, frmr.longitude]}
                        >

                            

                        <Popup className ="Popup" position={[frmr.latitude, frmr.longitude]}>
                            <div>
                                <h4>{frmr.name}</h4>
                                <p style={{ textAlign: "left", fontWeight: "bold" }}>{"Owner: " + " " + frmr.owner}</p>
                                <p style={{ textAlign: "left"}}>{"Contact:" + " " + frmr.contact}</p>


                                <Button variant="success" onClick={myHandleShow}>
                                    Show products
      </Button>

                            </div>

                        </Popup>

                    </Marker>

                )})};
</MapContainer>
</div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title></Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <ProductDisplay products={products} />

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
          </Button>
                    <Button variant="success" name="" onClick={resetTotal}>
                        Checkout
          </Button>
                </Modal.Footer>
            </Modal>

        </>

    );
};

export default LeafletMap;
