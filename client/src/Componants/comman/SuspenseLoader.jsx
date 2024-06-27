
import { Typography, CircularProgress, Box , styled} from "@mui/material";

const LoadStyle = styled(Box)({
    height : '100vh',
    width : '100%' ,
    display : 'flex',
    justifyContent : 'center' ,
    alignItems : 'center'

})


const SuspenseLoader = () => {

    return (
        <LoadStyle>
            <CircularProgress />
            <Typography>Loading...</Typography>
        </LoadStyle>
    )
}

export default SuspenseLoader;