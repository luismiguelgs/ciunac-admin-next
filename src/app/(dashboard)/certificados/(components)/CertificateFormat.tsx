import { StyleSheet, Document, Page, View, Text, Font, Image } from '@react-pdf/renderer'
import QRCode from 'qrcode'
//import selloDirector from '@/assets/director.jpg'
import selloDirector from '@/assets/firma.jpg'
import selloCoordinadora from '@/assets/coordinadora.jpg'
import selloElaborador  from '@/assets/elaborador.jpg'
import { IcertificadoDetalle } from '@/interfaces/certificado.interface'
import React from 'react'
import CertificadosService from '@/services/certificados.service'

Font.register({family:'Dancing Script', src:'/fonts/DancingScript-VariableFont_wght.ttf'})
Font.register({family: 'PinyonScript', src:'/fonts/PinyonScript-Regular.ttf'})
Font.register({family: 'Roboto-Bold', src:'/fonts/Roboto-Bold.ttf'})

export const generateSessionPDFQrCode = async (
    baseUrl: string,
  ): Promise<string> => {
    return await QRCode.toDataURL(
      baseUrl
    )
}

const styles = StyleSheet.create({
	page:{
		paddingTop: 45,
    	paddingBottom: 45,
    	paddingHorizontal: 45,
	},
	text1:{
		fontSize: 22,
		fontFamily: 'Dancing Script',
		marginTop: 100
	},
	text2:{
		fontSize: 22,
		fontFamily: 'Dancing Script',
		lineHeight: 1.5
	},
	alumno:{
		fontSize: 24,
		fontFamily: 'PinyonScript',
		textAlign: 'center',
		marginHorizontal: 'auto',
	},
	text3:{
		fontSize: 21,
		fontFamily: 'Roboto-Bold',
		textDecoration: 'underline',
		textDecorationStyle: 'dashed',
		marginLeft:6,
		marginRight:6
	},
	subtitle:{
		marginTop: 10,
		fontSize: 18,
		textAlign: 'center',
		fontFamily: 'Roboto',
		textDecoration: 'underline'
	},
	profesor:{
		marginTop: 10,
		fontSize: 14,
		textAlign: 'left',
		fontFamily: 'Roboto',
		textDecoration: 'underline'
	},
	section:{
		margin: 10,
		padding: 10,
		flexGrow: 1,
		fontFamily: 'Roboto',
        backgroundColor: 'white',
        color: 'black'
	},
	image:{
		marginBottom: 10,
		marginHorizontal: 20,
		width: 180,
		marginTop: 30
	},
	imageSello:{
		width: 160
	},
	header: {
		fontSize: 14,
		marginBottom: 10,
		textAlign: 'center',
		color: 'grey',
		fontFamily: 'PinyonScript',
	},
	table: {
		//display: 'table',
		width: 'auto',
		borderStyle: 'solid',
		borderWidth: 1,
		borderColor: '#bfbfbf',
		//margin: '15px 0',
	},
	tableRow: {
		flexDirection: 'row',
	},
	tableColHeader: {
		width: '33.33%',
		borderStyle: 'solid',
		borderWidth: 1,
		borderColor: '#bfbfbf',
		padding: 5,
	},
	tableCol: {
		width: '33.33%',
		borderStyle: 'solid',
		borderWidth: 1,
		borderColor: '#bfbfbf',
		padding: 5,
	},
	tableCellHeader: {
		fontSize: 26,
		fontFamily: 'Roboto-Bold',
		margin: 'auto',
		marginTop: 5,
	},
	tableCell: {
		fontFamily: 'Roboto-Bold',
		margin: 'auto',
		marginTop: 5,
		paddingTop: 5,
		paddingBottom: 5,
		fontSize: 13,
	},
	firma:{
		position: 'absolute',
		width:'30%',
		borderTopWidth: 1,
		borderTopColor: 'grey',
		textAlign: 'center',
		fontSize: 12,
		bottom: 30,
		left:'38%',
		right:0,
		padding: 10,
		color: 'grey'
	},
})

type Props = {
    url: string,
    idioma: string | undefined,
    fecha_emision: string,
    fecha_conclusion: string,
    nivel: string,
    alumno: string,
    horas: number,
    numero_folio: string,
	id: string,
	elaborador?: string
}
export default function CertificateFormat({id,url, idioma='IDIOMA', nivel, fecha_emision, fecha_conclusion, alumno, horas, numero_folio, elaborador=''}:Props) 
{
    const QRCode = generateSessionPDFQrCode(url)
	const [data, setData] = React.useState<IcertificadoDetalle[]>([]);

	React.useEffect(()=>{
        const getDetail = async () =>{
            const res = await CertificadosService.fetchItemsDetail(id as string)   
			setData(res)         
        }
        if(data.length === 0){
            console.info('Cargando detalle')
            getDetail()
        }
    },[])

	const sortedData = data.sort((a,b)=>{
		const aNumber = parseInt(a.curso.match(/\d+$/)?.[0] || '0');
  		const bNumber = parseInt(b.curso.match(/\d+$/)?.[0] || '0');
		return aNumber - bNumber;
	});
	
	const rows = [...sortedData];
	const rowsToAdd = 9 - rows.length;
	for (let i = 0; i < rowsToAdd; i++) {
		rows.push({curso:'',ciclo:'', modalidad:'', nota:0, id_certificado: '', isNew: false});
	}
	

    return (
        <Document>
			{/********************** PAGE 2 ********************/}
            <Page size="A4" style={styles.page}>
				<Text style={styles.text1} fixed>El director del Centro de Idiomas</Text>
				<Text style={{fontSize: 70, textAlign: 'center', fontFamily: 'PinyonScript', marginTop: 40, marginBottom: 40}} fixed>Certifica</Text>
				<View style={{ flexDirection: 'row', alignItems: 'center', width: '100%', marginBottom:2 }}>
					<Text style={styles.text2}>Que</Text>
					<View style={{ flexGrow: 1, borderBottomWidth: 1, borderBottomColor: 'black', borderBottomStyle: 'dotted', marginLeft: 5, marginRight: 5 }}>
						<Text style={styles.alumno}>{alumno}</Text>
					</View>
				</View>
				<View>
					<Text style={styles.text2}>
						ha concluido satisfactoriamente el <Text style={styles.text3}>{` NIVEL ${nivel} `}</Text> 
						del idioma <Text style={styles.text3}>{idioma}</Text>, en nuestra casa
						Superior de Estudios con un total de <Text style={styles.text3}>{horas}</Text>  horas.
						Se le expide el presente, a solicitud de la parte interesada para los fines pertinentes.
					</Text>
				</View>
				<View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%', marginBottom:2, marginTop: 50 }}>
					<View>
						<Image style={{ width: 120 }} src={QRCode} />
					</View>
					<View>
						<Text style={styles.text2}>
							Callao, <Text style={{textDecoration: 'underline',textDecorationStyle: 'dashed', fontSize: 18, fontWeight: 'bold'}}>{fecha_emision}</Text>
						</Text>
						<Image style={styles.image} src={selloDirector.src}/>
					</View>
				</View>
				<View style={{marginTop: 40}}>
					<Text style={styles.text2}>
						N° de Registro: <Text style={styles.text3}>{numero_folio}</Text>
					</Text>
				</View>  
            </Page>
			{/********************** PAGE 2 ********************/}
            <Page size="A4" style={styles.page}>
            <Text style={{fontSize: 30, textAlign: 'center', fontFamily: 'Roboto-Bold', marginTop: 10, marginBottom: 20}}>NIVEL {nivel}</Text>
                <View style={styles.table}>
					<View style={styles.tableRow}>
						<View style={[styles.tableColHeader]}>
							<Text style={styles.tableCellHeader}>CURSO</Text>
						</View>
						<View style={[styles.tableColHeader]}>
							<Text style={styles.tableCellHeader}>CICLO</Text>
						</View>
						<View style={[styles.tableColHeader]}>
							<Text style={styles.tableCellHeader}>NOTAS</Text>
						</View>
					</View>
                </View>
				<View style={{marginBottom: 5}}>
					{rows.map((item, index)=>(
						<View style={styles.tableRow} key={index}>
							<View style={[styles.tableCol]}>
								<Text style={styles.tableCell}>{item.curso}</Text>
							</View>
							<View style={[styles.tableCol]}>
								{item.modalidad !== '' && <Text style={styles.tableCell}>{`${item.ciclo} (${item.modalidad})`}</Text>}
							</View>
							<View style={[styles.tableCol]}>
								{item.nota !== 0 && <Text style={styles.tableCell}>{item.nota}</Text>}
							</View>
						</View>
					))}
					
				</View>
				<Text style={{fontSize: 14, textAlign: 'center', fontFamily: 'Dancing Script', marginTop: 5, marginBottom: 20}}>Curso Concluido : {fecha_conclusion}</Text>
				<View style={styles.table}>
					<View style={styles.tableRow}>
						<View style={[styles.tableCol]}>
							<Image style={styles.imageSello} src={selloElaborador.src}/>
						</View>
						<View style={[styles.tableCol]}>
							<Image style={styles.imageSello} src={selloCoordinadora.src}/>
						</View>
						<View style={[styles.tableCol]}>
							<Image style={styles.imageSello} src={selloDirector.src}/>
						</View>
					</View>
				</View>
				<View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%', marginTop: 20 }}>
					<View style={{ fontSize: 12 }}>
						<Text style={{fontSize: 14, fontWeight: 'bold', fontFamily : 'Roboto-Bold'}}>IMPORTANTE:</Text>
						<Text>La nota mínima aprobatoria es de 75 puntos</Text>
						<View style={{ marginTop: 10 }}>
							<Text>*EX.U. EXAMEN DE UBICACIÓN.</Text>
							<Text>*C.I. CICLO INTENSIVO.</Text>
							<Text>*C.I. CICLO REGULAR.</Text>
						</View>
					</View>
					<View style={{ position:'absolute', alignItems: 'center', fontSize: 10, bottom: 0, right: 0, width: '50%'}}>
						<Text>Registrado en el libro de Certificados</Text>
						<Text>Nivel {nivel} basjo el N° {numero_folio}</Text>
						<Text>Elaborado por: {elaborador}</Text>
						<Text>Callao, {fecha_emision}</Text>
					</View>
				</View>
				
				
            </Page>
        </Document>
    )
}
