import React, { Component } from 'react';
import barsChart from '../icons/bars-chart.svg';
import ereader from '../icons/ereader.svg'
import content from '../icons/content.svg'

const styles = {
    icons: {
        width: '150px',
    }, 
    container: {
        display: 'flex',
        justifyContent: 'space-around',
    },
    containerIcons: {
        display: 'flex',
        justifyContent: 'space-around',
        paddingTop: '8%'
    },
    textoTituloIcon: {
        maxWidth: '250px',
        textAlign: 'center',
        fontSize: '30px'
    },
    textoDescricao: {
        maxWidth: '250px',
        textAlign: 'center',
        fontSize: '20px'
    }
}

class IconsDescription extends Component {

	render() {
		return (
            <div>
                <div style={styles.containerIcons}>
                    <div >
                        <img style={styles.icons}src={barsChart} alt="Barra de progresso."/>
                    </div>
                    <div>
                        <img style={styles.icons} src={ereader} alt="ereader"/>
                    </div>
                    <div>
                        <img style={styles.icons} src={content} alt="content"/>
                    </div>         
                </div>

                <div style={styles.container}>
                    <div>  
                        <h3 style={styles.textoTituloIcon}>Titulo do texto</h3>
                        <p style={styles.textoDescricao}>Descrição bosta, xixi de onça. Coco de cavalo.Descrição bosta, xixi de onça.</p>
                    </div>
                    <div>
                        <h3 style={styles.textoTituloIcon}>Titulo do texto</h3>
                        <p style={styles.textoDescricao}>Descrição bosta, xixi de onça. Coco de cavalo.Descrição bosta, xixi de onça.</p>
                    </div>
                    <div>
                        <h3 style={styles.textoTituloIcon}>Titulo do texto</h3>
                        <p style={styles.textoDescricao}>Descrição bosta, xixi de onça. Coco de cavalo.Descrição bosta, xixi de onça.</p>
                    </div>
                </div>
            </div>
			     
		);
	}
}

export default IconsDescription;
