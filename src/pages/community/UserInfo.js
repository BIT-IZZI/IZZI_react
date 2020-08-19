import React, {useEffect, useState} from 'react';
import {
	MDBCardBody,
	MDBCol,
	MDBCard,
	MDBCardImage,
	MDBCardTitle,
	MDBCardText,
} from 'mdbreact';
import Geocode from 'react-geocode';
import {
	GoogleMap,
	useLoadScript,
	Marker,
	InfoWindow,
} from '@react-google-maps/api';
import usePlacesAutocomplete, {
	getGeocode,
	getLatLng,
} from 'use-places-autocomplete';
import {
	Combobox,
	ComboboxInput,
	ComboboxPopover,
	ComboboxList,
	ComboboxOption,
} from '@reach/combobox';
import axios from 'axios';

import '../CompanyPage/Map/Search.css';
import '@reach/combobox/styles.css';

import mapStyles from '../CompanyPage/Map/mapStyles';
Geocode.setApiKey('AIzaSyCrQuKKwt0DtPF8vxKPx6dRq3us6me2LO8');
Geocode.setLanguage('ko');
const libraries = ['places'];
const mapContainerStyle = {
	height: '55vh',
	width: '45vw',
};
const options = {
	styles: mapStyles,
};
const center = {
	lat: 37.42466,
	lng: 126.64249,
};

const UserInfo = ({match}) => {
	const [searchMarker, setSearchMarker] = useState(false);
	const [searchSelected, setSearchSelected] = useState({lat: '', lng: ''});
	const [infoShow, setInfoShow] = useState(false);
	const [selectedAddr, setSelectedAddr] = useState('');
	const [selected, setSelected] = useState({lat: '', lng: ''});
	const [userInfo, setUserInfo] = useState({});
	const [title, setTitle] = useState('');
	const [writer, setWriter] = useState('');
	const [address, setAddress] = useState('');
	const [contents, setContents] = useState('');
	const [userLocation, setUserLocation] = useState({lat: '', lng: ''});
	const [searchedAddr, setSearchedAddr] = useState('');
	const handleDelete = e => {
		e.preventDefault();
		axios
			.delete(`http://localhost:8080/articles/delete/${match.params.articleId}`)
			.then(res => {
				window.location.href = '/market';
			})
			.catch(error => {
				throw error;
			});
	};
	const handleModify = e => {
		e.preventDefault();
		const userJson = {
			title: title,
			writer: writer,
			address: address,
			contents: contents,
		};
		axios
			.patch(
				`http://localhost:8080/articles/update/${match.params.articleId}`,
				userJson,
			)
			.then(response => {
				console.log(response.data);
				alert('수정 완료');
				window.location.href = `/userInfo/${match.params.articleId}`;
			})
			.catch(error => {
				throw error;
			});
	};
	useEffect(() => {
		console.log(`${match.params.articleId}`);
		axios
			.get(`http://localhost:8080/articles/findUser/${match.params.articleId}`)
			.then(res => {
				console.log(res.data);
				sessionStorage.setItem('ArticleData', JSON.stringify(res.data));
				setTitle(res.data.title);
				setWriter(res.data.writer);
				setAddress(res.data.address);
				Geocode.fromAddress(res.data.address)
					.then(response => {
						const userAddress = response.results[0].geometry.location;
						console.log(userAddress);
						setUserLocation(userAddress);
					})
					.catch(error => {
						throw error;
					});
				setContents(res.data.contents);
				setUserInfo(res.data);
			})
			.catch(error => {
				throw error;
			});
	}, []);
	const locations = [
		{
			name: `${writer}님 중고거래 희망위치`,
			location: {
				lat: userLocation.lat,
				lng: userLocation.lng,
			},
		},
	];

	Geocode.fromLatLng(selected.lat, selected.lng).then(
		response => {
			const address = response.results[0].formatted_address;
			setSelectedAddr(address);
			console.log(address);
		},
		error => {
			console.error(error);
		},
	);
	const onSelect = item => {
		setInitialSelected(item);
	};
	const {isLoaded, loadError} = useLoadScript({
		googleMapsApiKey: 'AIzaSyCrQuKKwt0DtPF8vxKPx6dRq3us6me2LO8',
		libraries,
	});
	const [markers, setMarkers] = React.useState([]);

	const [initialSelected, setInitialSelected] = useState({});

	const onMapClick = React.useCallback(e => {
		setMarkers(current => [
			...current,
			{
				lat: e.latLng.lat(),
				lng: e.latLng.lng(),
				time: new Date(),
			},
		]);
	}, []);

	const mapRef = React.useRef();
	const onMapLoad = React.useCallback(map => {
		mapRef.current = map;
	}, []);

	const panTo = React.useCallback(({lat, lng}) => {
		//<Search panTo <- 여기로
		mapRef.current.panTo({lat, lng});
		mapRef.current.setZoom(14);
	}, []);

	if (loadError) return 'Error';
	if (!isLoaded) return 'Loading...';
	return (
		<>
			<div>
				<form
					className='needs-validation'
					noValidate
					style={{padding: '4rem', margin: '0 auto', maxWidth: 800}}
				>
					<MDBCol md='8' className='mb-3'>
						<h2> {title}</h2>

						<label htmlFor='defaultFormRegisterNameEx'>글 제목</label>
						<input type='text' className='form-control' value={title} />

						<label htmlFor='defaultFormRegisterNameEx'>작성자</label>
						{JSON.parse(sessionStorage.userData).userId === {writer} ? (
							<input
								name='fname'
								type='text'
								id='defaultFormRegisterNameEx'
								className='form-control'
								required
								value={writer}
								onChange={e => setContents(e.target.value)}
							/>
						) : (
							<input
								name='fname'
								type='text'
								id='defaultFormRegisterNameEx'
								className='form-control'
								required
								value={writer}
							/>
						)}

						<label htmlFor='defaultFormRegisterNameEx'>희망 거래 물품</label>
						<textarea
							type='text'
							id='defaultFormRegisterNameEx'
							className='form-control'
							required
							value={contents}
							onChange={e => setContents(e.target.value)}
						/>

						<label htmlFor='defaultFormRegisterNameEx'>거래 희망 장소</label>
						<input
							name='fname'
							type='text'
							id='defaultFormRegisterNameEx'
							className='form-control'
							required
							value={address}
							onChange={e => setAddress(e.target.value)}
						/>
						<br />
						<br />

						<Locate panTo={panTo} />
						<Search
							panTo={panTo}
							setPosition={setSearchSelected}
							setMarkerShow={setSearchMarker}
							setSearchedAddr={setSearchedAddr}
						/>

						<GoogleMap
							id='map'
							mapContainerStyle={mapContainerStyle}
							zoom={16}
							center={userLocation}
							options={options}
							onClick={onMapClick}
							onLoad={onMapLoad}
						>
							{searchMarker && (
								<Marker
									position={searchSelected}
									onClick={() => searchSelected}
									icon={{
										url: `/movingCar.png`,
										origin: new window.google.maps.Point(0, 0),
										anchor: new window.google.maps.Point(15, 15),
										scaledSize: new window.google.maps.Size(30, 30),
									}}
								>
									<InfoWindow>
										<h5>{searchedAddr}</h5>
									</InfoWindow>
								</Marker>
							)}

							{locations.map(item => {
								return (
									<Marker
										key={item.name}
										position={item.location}
										onClick={() => onSelect(item)}
										icon={{
											url: `/home.svg`,
											origin: new window.google.maps.Point(0, 0),
											anchor: new window.google.maps.Point(20, 20),
											scaledSize: new window.google.maps.Size(40, 40),
										}}
									/>
								);
							})}
							{initialSelected.location && (
								<InfoWindow
									position={initialSelected.location}
									onCloseClick={() => setInitialSelected({})}
								>
									<div>
										<h5>{initialSelected.name}</h5>
										<p> {address}</p>
									</div>
								</InfoWindow>
							)}

							{markers.map(marker => (
								<Marker
									key={`${marker.lat}-${marker.lng}`}
									position={{lat: marker.lat, lng: marker.lng}}
									onClick={() => {
										setSelected(marker);
										setInfoShow(true);
									}}
									icon={{
										url: `/movingCar.png`,
										origin: new window.google.maps.Point(0, 0),
										anchor: new window.google.maps.Point(15, 15),
										scaledSize: new window.google.maps.Size(30, 30),
									}}
								/>
							))}
							{infoShow ? (
								<InfoWindow
									position={{lat: selected.lat, lng: selected.lng}}
									onCloseClick={() => {
										setInfoShow(false);
									}}
								>
									<div>
										<h4>
											<span role='img' aria-label='bear'>
												주소
											</span>
										</h4>
										<p>{selectedAddr} </p>
									</div>
								</InfoWindow>
							) : null}
						</GoogleMap>
						{sessionStorage.userData &&
							(JSON.parse(sessionStorage.userData).userId === writer ? (
								<div>
									<button
										type='submit'
										className='btn btn-info'
										onClick={handleModify}
									>
										수정하기
									</button>
									<button
										type='submit'
										className='btn btn-info'
										onClick={handleDelete}
									>
										삭제하기
									</button>
								</div>
							) : (
								<div>댓글달기</div>
							))}

						<MDBCol>
							<MDBCard style={{width: '22rem'}}>
								<MDBCardImage
									className='img-fluid'
									src='https://cdn.ownerclan.com/kJb7r6jmdr3QmT7iBK4aoZ5_Lrm1FtqyFXOsgFzVwVM/marketize/640/as/v1.jpg'
									waves
								/>
								<MDBCardBody>
									<MDBCardTitle> 원형탁자 입니다.</MDBCardTitle>
									<MDBCardText>거의 새거나 다름없습니다</MDBCardText>
								</MDBCardBody>
							</MDBCard>
						</MDBCol>
					</MDBCol>
				</form>
			</div>
		</>
	);
};
function Locate({panTo}) {
	return (
		<button
			className='locate'
			onClick={e => {
				e.preventDefault();
				navigator.geolocation.getCurrentPosition(
					position => {
						panTo({
							lat: position.coords.latitude,
							lng: position.coords.longitude,
						});
					},
					() => null,
				);
			}}
		>
			<img src='/compass.svg' alt='compass' />
		</button>
	);
}
function Search({panTo, setPosition, setMarkerShow, setSearchedAddr}) {
	const {
		ready,
		value,
		suggestions: {status, data},
		setValue,
		clearSuggestions,
	} = usePlacesAutocomplete({
		requestOptions: {
			location: {lat: () => 43.6532, lng: () => -79.3832}, // 검색할때의 이 지점에서부터 찾는?
			radius: 100 * 1000,
		},
	});
	// https://developers.google.com/maps/documentation/javascript/reference/places-autocomplete-service#AutocompletionRequest

	const handleInput = e => {
		// Update the keyword of the input element
		setValue(e.target.value);
	};

	const handleSelect = async address => {
		// When user selects a place, we can replace the keyword without request data from API
		// by setting the second parameter as "false"
		setValue(address, false);
		clearSuggestions();

		try {
			const results = await getGeocode({address});
			// console.log(results[0]) formatted address, compo 전부 가져옴
			const {lat, lng} = await getLatLng(results[0]);
			console.log(address);
			console.log(lat, lng);
			panTo({lat, lng});
			setPosition({lat, lng});
			setMarkerShow(true);
			setSearchedAddr(address);
		} catch (error) {
			console.log('😱 Error: ', error);
		}
	};

	return (
		<div className='search'>
			<Combobox onSelect={handleSelect}>
				<br />
				<ComboboxInput
					value={value}
					onChange={handleInput}
					disabled={!ready}
					placeholder='위치 검색'
				/>
				<ComboboxPopover>
					<ComboboxList>
						{status === 'OK' &&
							data.map(({id, description}) => (
								<ComboboxOption key={id} value={description} />
							))}
					</ComboboxList>
				</ComboboxPopover>
			</Combobox>
		</div>
	);
}
export default UserInfo;
