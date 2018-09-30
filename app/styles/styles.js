import { StyleSheet,Dimensions } from 'react-native';
// import { colorStyles, colorPalette } from "colorStyles"

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
		flex: 2,
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
	TitleName2: {
        color: '#000000',
        fontWeight: '600',
        fontSize: 18
    },
    FilterLabel: {
         color: '#000000',
         fontWeight: '600',
         fontSize: 16
    },
	IDContainer: {
		paddingTop: 4

	},
	userID: {
		color: '#FFFFFF'
	},
	GridContainer: {
		flex: 5,
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
		padding: 32

	},
	GridTitleText: {
		color: '#FFFFFF',
		textAlign: 'center'

	},
	HomeIcon: {
		fontSize: 112,
	}
});
