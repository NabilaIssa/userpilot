import UserHead from "./UserHead";
import useFetch from '../../useFetch';
import { CircularProgress, Alert } from '@mui/material';

const UserDetails = (props) => {
    const {userId} = props;

    const {data, loading, error } = useFetch(
        `https://randomuser.me/api?id=${userId}`
    );

    const user = data && data.results ? data.results[0] : null;

    if (loading) {
        return (
            <CircularProgress />
        );
      }

    if (error || !user) {
        return (
        <Alert severity="error">
            Something went wrong
          </Alert>
        );
      }

    return (
        <UserHead user={user} design="popupDesign"/>
    )
}

export default UserDetails;