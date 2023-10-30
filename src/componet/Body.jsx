import { Button } from 'primereact/button'
import ReactPlayer from 'react-player'

export default function Body() {

    return (
        <div className="grid mt-5 ml-4">
            <div className="col-8">
                <div className="flex flex-column justify-content-center">
                    <div className="flex">
                        <ReactPlayer width="940px" height="480px" url='https://www.youtube.com/watch?v=-ENUPnHn13w' />
                    </div>
                    <p className="font-bold text-xl">Una Vuelta en el Halley</p>
                    <div className='flex justify-content-between'>
                        <div className="flex justify-content-start">
                            <img className="w-1 border-circle" src="https://i.ibb.co/2KLbh2p/Lewin.jpg" alt="Lewin" />
                            <div className="flex flex-column ml-2">
                                <label className="text-sm" htmlFor="">Lewin - Tema</label>
                                <label style={{ fontSize: "12px " }} htmlFor="">345 subcriptores</label>
                            </div>
                        </div>
                        <div className="flex justify-content-end">
                            <Button size="small"
                                className="surface-900 text-white text-left border-none border-round-3xl hover:surface-700" label="Suscribirme"
                            />
                            <Button size="small"
                                className="surface-200 text-color text-left border-none border-round-3xl hover:surface-300" label="163" icon="pi pi-thumbs-up"
                            />
                            <Button size="small"
                                className="surface-200 text-color text-left border-none border-round-3xl hover:surface-300" label="" icon="pi pi-thumbs-down"
                            />
                            <Button size="small"
                                className="surface-200 text-color text-left border-none border-round-3xl hover:surface-300" label="Compartir" icon="pi pi-directions"
                            />
                            <Button size="small"
                                className="surface-200 text-color text-left border-none border-round-3xl hover:surface-300" label="Descargar" icon="pi pi-download"
                            />
                            <Button size="small"
                                className="surface-200 text-color text-left border-none border-round-3xl hover:surface-300" icon="pi pi-ellipsis-h"
                            />
                        </div>

                    </div>
                    <div className="surface-200 w-12 h-12 mt-3 border-round-xl p-2">
                        <p className="text-sm font-bold">10 K visualizaciones hace 7 años</p>
                        <p className="text-sm ">Provided to YouTube by Altafonte</p>
                        <p className="text-sm ">Una Vuelta de Halley · Lewin</p>
                    </div>
                    <div className="flex justify-content-center mt-4">
                        <label htmlFor="" className="text-sm">Los comentarios están desactivados.</label>
                        <label htmlFor="" className="text-sm text-blue-700">Más información</label>
                    </div>
                </div>
            </div>
            <div className="col-4">
                <div className="flex justify-content-start">
                    <Button size="small"
                        className="surface-900 text-white text-left border-none border-round-xl hover:surface-200" label="Todos"
                    />
                    <Button size="small"
                        className="surface-200 text-color text-left border-none border-round-xl hover:surface-300" label="Lewin-Topic"
                    />

                    <Button size="small"
                        className="surface-200 text-color text-left border-none border-round-xl hover:surface-300" label="Musica pop"
                    />
                    <Button className="bg-white text-color text-left border-none border-round-xl hover:surface-200" icon="pi pi-chevron-right" />
                </div>
                <div>
                    <div className="flex mt-2">
                        <img className="border-round-xl" width="170px" height="100px" src="https://i.ibb.co/2KLbh2p/Lewin.jpg" alt="Lewin" />
                        <div className="flex flex-column ml-2" style={{ marginTop: "-12px" }}>
                            <p className="text-sm font-bold">Mix: Una vuelta del Halley</p>
                            <p className="text-gray-700" style={{ fontSize: "12px " }}>Lewin y mas</p>
                        </div>
                    </div>
                    <div className="flex mt-2">
                        <img className="border-round-xl" width="170px" height="100px" src="https://i.ibb.co/2KLbh2p/Lewin.jpg" alt="Lewin" />
                        <div className="flex flex-column ml-2 " style={{ marginTop: "-12px" }}>
                            <p className="text-sm font-bold" >Correr</p>
                            <div className='-mt-3'>
                                <p className="text-gray-700" style={{ fontSize: "12px " }}>Lewin-Topic</p>
                                <p className="text-gray-700" style={{ fontSize: "12px " }}>9,5 K visualizaciones * hace 7 años</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex mt-2">
                        <img className="border-round-xl" width="170px" height="100px" src="https://i.ibb.co/2KLbh2p/Lewin.jpg" alt="Lewin" />
                        <div className="flex flex-column ml-2 " style={{ marginTop: "-12px" }}>
                            <p className="text-sm font-bold" >Correr</p>
                            <div className='-mt-3'>
                                <p className="text-gray-700" style={{ fontSize: "12px " }}>Lewin-Topic</p>
                                <p className="text-gray-700" style={{ fontSize: "12px " }}>9,5 K visualizaciones * hace 7 años</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex mt-2">
                        <img className="border-round-xl" width="170px" height="100px" src="https://i.ibb.co/2KLbh2p/Lewin.jpg" alt="Lewin" />
                        <div className="flex flex-column ml-2 " style={{ marginTop: "-12px" }}>
                            <p className="text-sm font-bold" >Correr</p>
                            <div className='-mt-3'>
                                <p className="text-gray-700" style={{ fontSize: "12px " }}>Lewin-Topic</p>
                                <p className="text-gray-700" style={{ fontSize: "12px " }}>9,5 K visualizaciones * hace 7 años</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex mt-2">
                        <img className="border-round-xl" width="170px" height="100px" src="https://i.ibb.co/2KLbh2p/Lewin.jpg" alt="Lewin" />
                        <div className="flex flex-column ml-2 " style={{ marginTop: "-12px" }}>
                            <p className="text-sm font-bold" >Correr</p>
                            <div className='-mt-3'>
                                <p className="text-gray-700" style={{ fontSize: "12px " }}>Lewin-Topic</p>
                                <p className="text-gray-700" style={{ fontSize: "12px " }}>9,5 K visualizaciones * hace 7 años</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex mt-2">
                        <img className="border-round-xl" width="170px" height="100px" src="https://i.ibb.co/2KLbh2p/Lewin.jpg" alt="Lewin" />
                        <div className="flex flex-column ml-2 " style={{ marginTop: "-12px" }}>
                            <p className="text-sm font-bold" >Correr</p>
                            <div className='-mt-3'>
                                <p className="text-gray-700" style={{ fontSize: "12px " }}>Lewin-Topic</p>
                                <p className="text-gray-700" style={{ fontSize: "12px " }}>9,5 K visualizaciones * hace 7 años</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex mt-2">
                        <img className="border-round-xl" width="170px" height="100px" src="https://i.ibb.co/2KLbh2p/Lewin.jpg" alt="Lewin" />
                        <div className="flex flex-column ml-2 " style={{ marginTop: "-12px" }}>
                            <p className="text-sm font-bold" >Correr</p>
                            <div className='-mt-3'>
                                <p className="text-gray-700" style={{ fontSize: "12px " }}>Lewin-Topic</p>
                                <p className="text-gray-700" style={{ fontSize: "12px " }}>9,5 K visualizaciones * hace 7 años</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}