import React from 'react';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';



export default function Head({ visible, setVisible }) {
    return (
        <>
            <div class="flex justify-content-between flex-wrap">
                <div className="flex align-items-start">
                    <Button
                        className="bg-white text-color text-left border-none border-round-xl hover:surface-200" icon="pi pi-bars"
                        onClick={() => setVisible(true)}
                    />
                    <img className="" src="https://i.ibb.co/KrRtF5H/adwad.png" alt="imagen2" />
                </div>
                <div className="flex " style={{height:"40px"}}>
                    <span className="flex aligt-items-start " >
                        <InputText className="text-sm w-max border-noround border-round-left-3xl border w-30rem" placeholder="Search" />
                        <Button
                            
                            className="surface-200 text-color text-left border-noround border-round-right-3xl border-none hover:surface-200" icon="pi pi-search"
                            onClick={() => setVisible(true)}
                        />
                    </span>

                    <Button
                        
                        className="surface-200 text-color text-left border-none border-circle hover:surface-200 ml-3 " icon="pi pi-microphone"
                        onClick={() => setVisible(true)}
                    />
                </div>
                <div>

                    <Button
                        className="bg-white text-color text-left border-none border-circle border-round-xl hover:surface-200" icon="pi pi-video"
                        onClick={() => setVisible(true)}
                    />
                    <Button
                        className="bg-white text-color text-left border-none border-circle border-round-xl hover:surface-200" icon="pi pi-bell"
                        outlined badge="2"
                        badgeClassName="p-badge-danger" />
                    <Button
                        className="bg-white text-color text-left border-none border-circle border-round-xl hover:surface-200" icon="pi pi-user"
                        onClick={() => setVisible(true)}
                    />
                </div>

            </div>
        </>
    );
}
