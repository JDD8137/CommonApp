import { StyleSheet,Dimensions } from 'react-native';


export const styles = StyleSheet.create({
	loginForeground: {
		flex: 1,
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
		paddingLeft: 10,
		paddingRight: 10,
	},
	facebookSignin: {
		marginTop: 30,
		marginBottom: -10,
		textAlign:"center",
		color: '#FFFFFF'
	},
	googleSignin: {
		marginTop: 20,
		textAlign:"center",
		color:"#FBBC05"
	},
	TitleContainer: {
		flex: 1,
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		paddingTop: 0,
	},
	TitleHeader: {

	},
	TitleName: {
		color: '#FFFFFF',
		fontWeight: '600',
		fontSize: 18
	},
    FilterLabel: {
         color: '#000000',
         fontWeight: '600',
		 fontSize: 18,
		 paddingTop: 2
	},
	IDContainer: {
		paddingTop: 4

	},
	userID: {
		color: '#FFFFFF'
	},
	GridContainer: {
		flex: 4,
		flexDirection: 'column',
		alignItems: 'center',
	},
	GridRowContainer: {
	
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-around'

	},
	GridColumnContainer: {
		
	},
	GridComponent: {
		padding: 32,


	},
	GridTitleText: {
		color: '#FFFFFF',
		textAlign: 'center'

	},
	HomeIcon: {
		fontSize: 112,
	},
	UniversityIcon: {
		fontSize: 90,
		paddingLeft: 16,
		paddingBottom: 24,
		paddingTop: 10
	},
	ProfileIcon: {
		fontSize: 112,
		paddingBottom: 10
	},
	PanelContainer   : {
        backgroundColor: '#fff',
        margin:10,
        overflow:'hidden'
    },
    PanelTitleContainer : {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center'
    },
    PanelTitle       : {
        padding : 4,
		color   :'#2a2f43',
		fontSize: 18,
		fontWeight:'bold',
		textAlign: 'center'
    },
    PanelButton      : {

    },
    PanelButtonImage : {
        width   : 25,
        height  : 25
    },
    PanelBody        : {
        padding     : 0,
        paddingTop  : 0
    }
});
