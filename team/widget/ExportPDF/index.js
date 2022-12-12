// import React from 'react';
// import { PDFDownloadLink, Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

// OWNER : next_admin
// LAST EDIT : 10 Sep 2022

// const WExportPDF = ({
//     linkTitle
// }) => {
/**
 * DEFINE PROPS
 */
// let _linkTitle = linkTitle;

//     const styles = StyleSheet.create({
//         page: {
//             flexDirection: 'row',
//             backgroundColor: '#E4E4E4'
//         },
//         section: {
//             margin: 10,
//             padding: 10,
//             flexGrow: 1
//         }
//     });

//     const MyDocument = () => (
//         <Document>
//             <Page size="A4" style={styles.page}>
//                 <View style={styles.section}>
//                     <Text>Section #ANTON</Text>
//                 </View>
//                 <View style={styles.section}>
//                     <Text>Section #2</Text>
//                 </View>
//             </Page>
//         </Document>
//     );

//     return (
//         <PDFDownloadLink document={<MyDocument />} fileName="somename.pdf">
//             {({ blob, url, loading, error }) => (loading ? 'Loading document...' : linkTitle)}
//         </PDFDownloadLink>
//     )
// }

// export default WExportPDF;
