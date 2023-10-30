import React, { useState } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import { Divider } from 'primereact/divider';

export default function Side({ visible, setVisible }) {

    return (
        <div className="flex justify-content-start">
            <Sidebar  visible={visible} onHide={() => setVisible(false)}>
                <div className="flex flex-column">
                <div className="flex align-items-start">
                <Button
                    className="bg-white text-color text-left border-none border-round-xl ml-1" icon="pi pi-bars"
                    onClick={() => setVisible(false)}
                />
                <img className="" src="https://i.ibb.co/KrRtF5H/adwad.png" alt="imagen2" />
                </div>
                    
                    <Button className="bg-white text-color text-left border-none border-round-xl hover:surface-200" icon="pi pi-home" label="Inicio" onClick={() => setVisible(false)} />
                    <Button className="bg-white text-color text-left border-none border-round-xl hover:surface-200" icon="pi pi-bolt" label="Shorts" onClick={() => setVisible(false)} />
                    <Button className="bg-white text-color text-left border-none border-round-xl hover:surface-200" icon="pi pi-video" label="Suscripciones" onClick={() => setVisible(false)} />
                    <Divider />
                    <Button className="bg-white text-color text-left border-none border-round-xl hover:surface-200" icon="pi pi-chevron-right" label="Tu" onClick={() => setVisible(false)} />
                    <Button className="bg-white text-color text-left border-none border-round-xl hover:surface-200" icon="pi pi-user" label="Tu canal" onClick={() => setVisible(false)} />
                    <Button className="bg-white text-color text-left border-none border-round-xl hover:surface-200" icon="pi pi-history" label="Historial" onClick={() => setVisible(false)} />
                    <Button className="bg-white text-color text-left border-none border-round-xl hover:surface-200" icon="pi pi-desktop" label="Mis videos" onClick={() => setVisible(false)} />
                    <Button className="bg-white text-color text-left border-none border-round-xl hover:surface-200" icon="pi pi-clock" label="Ver mas tarde" onClick={() => setVisible(false)} />
                    <Button className="bg-white text-color text-left border-none border-round-xl hover:surface-200" icon="pi pi-thumbs-up" label="Videos que me gustan" onClick={() => setVisible(false)} />
                    <Divider />
                    <Button className="bg-white text-color text-left border-none border-round-xl hover:surface-200" icon="pi pi-bars" label="Suscripciones" onClick={() => setVisible(false)} />
                    <Divider />
                    <Button className="bg-white text-color text-left border-none border-round-xl hover:surface-200" icon="pi pi-bars" label="Explorar" onClick={() => setVisible(false)} />
                    <Divider />
                </div>
            </Sidebar>
        </div>
    );
}
