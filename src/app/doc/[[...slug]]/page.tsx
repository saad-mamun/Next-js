

interface IParams {
    params : {slug: string[] };
}
function Documents({params}: IParams) {
    console.log("document-params", params.slug);

    if(params.slug?.length === 1){
        return <div>Document feature id: {params.slug[0]}</div>
    }
    if(params.slug?.length === 2){
        return <div>Document concept id: {params.slug[1]}</div>
    }
    if(params.slug?.length === 3){
        return <div>Document example id: {params.slug[2]}</div>
    }



  return (
    <div>
      feater1
    </div>
  )
}

export default Documents
