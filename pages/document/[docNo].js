import { useRouter } from "next/router";

const docNo = () => {
    const router = useRouter();
    const docNumber = router.query.docNo;
    return (
      <div>
        <h1>This is {docNumber}</h1>
      </div>
    );
  }
  
  export default docNo;