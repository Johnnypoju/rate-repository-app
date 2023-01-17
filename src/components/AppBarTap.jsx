import { Link } from "react-router-native";
import Text from "./Text";

const AppBarTap = ({ link, text}) => {
    return (
        <Link to={link}>
            <Text fontWeight={'bold'} color={'white'} padding={'padding'}>
                {text}
            </Text>
        </Link>
        );
};

export default AppBarTap;