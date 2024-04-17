import { useEffect } from "react";
import { useParams } from "react-router-dom";

const Helper = () => {
  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    //call api to fetch user info using this id and navigate accordingly.
  }, []);
};

export default Helper;
