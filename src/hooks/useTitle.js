import { useEffect } from "react";
const useTitle = title =>{
     useEffect(() =>{
          document.title = `${title} - Food&Taste`;
     }, [title])
};

export default useTitle;