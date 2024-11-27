'use client'
// my-component.jsx
import { Document, Page, PDFViewer, StyleSheet, Text, View } from '@react-pdf/renderer'

// Create styles
const styles = StyleSheet.create({
    page: {
      flexDirection: 'row',
      backgroundColor: '#E4E4E4'
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1
    }
  });

export function MyComponent() {
    return (
        <PDFViewer width={400} height={600}>
            <Document>
                <Page size="A4" style={styles.page}>
                    <View style={styles.section}>
                        <Text>Section #1</Text>
                    </View>
                    <View style={styles.section}>
                        <Text>Section #2</Text>
                    </View>
                </Page>
            </Document>
        </PDFViewer>
    )
}