
import { Pressable } from "react-native";
import { Link } from "react-router-native";
import Text from "../Text";



const AppBarTap = ({ link, text, onPress}) => {
    return onPress ? (
        <Pressable onPress={onPress}>
            <Text fontWeight={'bold'} color={'white'} padding={'padding'}>
                {text}
            </Text>
        </Pressable> ): (
        <Link to={link} >          
            <Text fontWeight={'bold'} color={'white'} padding={'padding'}>
                {text}
            </Text>
        </Link>
        );
};

export default AppBarTap;