import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';

export default function App() {

  const [newColor, setNewColor] = useState([])

  const randomColor = () => {
    var red = Math.floor(Math.random() * 256)
    var blue = Math.floor(Math.random() * 256)
    var green = Math.floor(Math.random() * 256)

    const color = `rgb(${red},${green},${blue})`
    console.log(color)
    return color

  }

  console.log(newColor)

  return (
    <View style={styles.container}>

      <TouchableOpacity
        onPress={() => { setNewColor([...newColor, randomColor()]) }}
        style={styles.buttonStyle}
      >
        <Text style={styles.textStyles}>
          Click To Generate New Color
        </Text>
      </TouchableOpacity>


      <FlatList
        keyExtractor={(key) => key}
        data={newColor}
        // numColumns= "5"
        renderItem={({ item }) => {
          return (
            <View style={styles.imageContainer}>
              <View
              style={{
                backgroundColor: item,
                width: 100,
                height: 100,
                borderRadius: 5,
                display: 'flex',
                justifyContent: "center",
                alignItems: "center",
                width: "100%"
              }}
              >
                <Text
                  style= {styles.colorText}
                >
                  {item}
                </Text>
              </View>
            </View>
          )
        }}

      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonStyle: {
    backgroundColor: "#00b0ff",
    position: "relative",
    overflow: "hidden",
    color: "#eee",
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginBottom: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  textStyles: {
    color: "white",
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  colorText:{
    fontSize: 14,
    color: "white"
  },
  imageContainer: {
    marginVertical: 10,
    paddingHorizontal: 30,
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
  },
});
