import React, { Component } from 'react'
import FlatButton from 'material-ui/FlatButton';
import SearchSubmit from 'material-ui/svg-icons/action/search';
import { fullWhite } from 'material-ui/styles/colors';
import "../css/styles.css";

class Banner extends Component {

	render() {

		const styles = {
			video: {
				zIndex: '0',
				minWidth: '100%',
				minHeight: '100%',
			},
			banner:{
				height: "100vh",
				position: "relative",
			},
			bannerTexto:{
				left: 0,
				top: 0,
				position: "absolute",
				height: "100%",
				width: "100%",
				zIndex: 10,
				backgroundColor: "rgba(119, 23, 127,.8)",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				flexDirection: "column",
                fontFamily: "Oswald",
                color: "white",
                textAlign: 'center'
			},
			bannerVideo:{
				left: 0,
				top: 0,
				position: "absolute",
				height: "100%",
				width: "100%",
				overflow: "hidden"
			},
			searchSubmit: {
				margin: 12,
			},
		}

		return (
			<div id="banner" style={styles.banner}>
                <div className="texto" style={styles.bannerTexto}>
                    <h1>
                        A PONTE ENTRE TECNOLOGIA E EDUCAÇÃO
                    </h1>
                    <p>
                        Escolha um <strong>modelo 3D</strong>, manipule suas camadas, crie descrições e adicione #comentários
                    </p>

                    <div>
                        <input type="search" name="searchField" placeholder="Digite algo. Ex: Célula" />
                        <FlatButton
                            backgroundColor="#a4c639"
                            hoverColor="#8AA62F"
                            icon={<SearchSubmit color={fullWhite} />}
                            style={styles.searchSubmit}
                        />
                    </div>
                </div>

                <div className="background" style={styles.bannerVideo}>
                    <video style={styles.video} loop="loop" autoPlay="autoplay">
                        <source src={require("../video/teaser.webm")} />
                    </video>
                </div>
			</div>
		);
	}
}

export default Banner;
