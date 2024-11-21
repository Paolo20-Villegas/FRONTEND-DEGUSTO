import React, { useState } from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import './MovDatos.css';

const libraries = ['places'];
const mapContainerStyle = {
  width: '100%',
  height: '400px',
};
const center = {
  lat: -34.397,
  lng: 150.644,
};

const AgregarNegocio = () => {
  const [companyData, setCompanyData] = useState({
    name: '',
    telefono: '',
    area: '',
    direccion: '',
    latitud: '',
    longitud: '',
    imageUrl: ''
  });

  const [selected, setSelected] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const handleChange = (e) => {
    setCompanyData({
      ...companyData,
      [e.target.id]: e.target.value,
    });
  };

  const handleMapClick = (event) => {
    const lat = event.latLng.lat();
    const lng = event.latLng.lng();
    setSelected({ lat, lng });
    fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=AIzaSyCmta9KsVU-HVVwEYPSxvLb5EafwdsEz48`)
      .then(response => response.json())
      .then(data => {
        const direccion = data.results[0]?.formatted_address || 'Dirección no encontrada';
        setCompanyData(prevData => ({
          ...prevData,
          direccion,
          latitud: lat,
          longitud: lng,
        }));
      });
  };

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'logo_preset');

    try {
      const res = await fetch('https://api.cloudinary.com/v1_1/derufjp1n/image/upload', {
        method: 'POST',
        body: formData
      });
      const data = await res.json();
      setImagePreview(data.secure_url);
      setCompanyData(prevData => ({
        ...prevData,
        imageUrl: data.secure_url
      }));
    } catch (err) {
      console.error('Error al cargar la imagen:', err);
    }
  };

  const handleAddBusiness = async () => {
    const businessData = {
      name: companyData.name,
      telefono: companyData.telefono,
      direccion: companyData.direccion,
      latitud: companyData.latitud,
      longitud: companyData.longitud,
      imageUrl: companyData.imageUrl,
      business_AreaId: companyData.area, // Enviar el ID del área seleccionada
    };

    try {
      const response = await fetch('/api/business', { // Ruta a tu API
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(businessData),
      });
      if (response.ok) {
        alert('Negocio agregado exitosamente');
        setCompanyData({
          name: '',
          telefono: '',
          area: '',
          direccion: '',
          latitud: '',
          longitud: '',
          imageUrl: ''
        });
        setImagePreview(null);
        setSelected(null);
      } else {
        alert('Error al agregar el negocio');
      }
    } catch (error) {
      console.error('Error al agregar negocio:', error);
    }
  };

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyCmta9KsVU-HVVwEYPSxvLb5EafwdsEz48',
    libraries,
  });

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <section className="full-width header-well">
      <div className="full-width header-well-icon">
        <i className="zmdi zmdi-balance"></i>
      </div>
      <div className="mdl-grid">
        <div className="mdl-cell mdl-cell--12-col">
          <div className="full-width panel mdl-shadow--2dp">
            <div className="full-width panel-title bg-primary text-center tittles">
              Nuevo Negocio
            </div>
            <div className="full-width panel-content">
              <form>
                <div className="mdl-grid">
                  <div className="mdl-cell mdl-cell--6-col">
                    <input
                      className="mdl-textfield__input"
                      type="text"
                      id="name"
                      value={companyData.name}
                      onChange={handleChange}
                      placeholder="Nombre del negocio"
                    />
                  </div>
                  <div className="mdl-cell mdl-cell--6-col">
                    <input
                      className="mdl-textfield__input"
                      type="tel"
                      id="telefono"
                      value={companyData.telefono}
                      onChange={handleChange}
                      placeholder="Número del negocio"
                      pattern="[0-9]*"
                      inputMode="numeric"
                    />
                  </div>
                  <div className="mdl-cell mdl-cell--6-col">
                    <select
                      className="mdl-textfield__input"
                      id="area"
                      value={companyData.area}
                      onChange={handleChange}
                    >
                      <option value="">Selecciona un área</option>
                      <option value="1">Restaurantes</option>
                      <option value="2">Tiendas</option>
                      <option value="3">Cafeterías</option>
                      <option value="4">Servicios</option>
                      <option value="5">Otros</option>
                    </select>
                  </div>
                  <div className="mdl-cell mdl-cell--12-col">
                    <div className="map-container">
                      <GoogleMap
                        mapContainerStyle={mapContainerStyle}
                        zoom={8}
                        center={center}
                        onClick={handleMapClick}
                      >
                        {selected && <Marker position={{ lat: selected.lat, lng: selected.lng }} />}
                      </GoogleMap>
                    </div>
                  </div>
                  <div className="mdl-cell mdl-cell--4-col">
                    <input
                      className="mdl-textfield__input"
                      type="text"
                      id="direccion"
                      value={companyData.direccion}
                      readOnly
                    />
                  </div>
                  <div className="mdl-cell mdl-cell--4-col">
                    <input
                      className="mdl-textfield__input"
                      type="text"
                      id="latitud"
                      value={companyData.latitud}
                      readOnly
                    />
                  </div>
                  <div className="mdl-cell mdl-cell--4-col">
                    <input
                      className="mdl-textfield__input"
                      type="text"
                      id="longitud"
                      value={companyData.longitud}
                      readOnly
                    />
                  </div>
                  <div className="mdl-cell mdl-cell--12-col">
                    <div style={{ height: '200px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                      {imagePreview ? (
                        <img src={imagePreview} alt="Previsualización de imagen" style={{ maxWidth: '100%', maxHeight: '100%' }} />
                      ) : (
                        <div>Imagen no cargada</div>
                      )}
                    </div>
                    <input type="file" accept="image/*" onChange={handleImageUpload} />
                  </div>
                  <div className="mdl-cell mdl-cell--12-col">
                    <button
                      type="button"
                      className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored"
                      onClick={handleAddBusiness}
                    >
                      Agregar Negocio
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgregarNegocio;