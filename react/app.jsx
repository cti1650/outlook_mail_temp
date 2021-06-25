const BaseItem = (props) => {
  let { title,data } = props;
  const [postStr,setPostStr] = React.useState(()=>{
    return {...{
      name: '',
    subject: '',
    body: '',
    to: '',
    replace: {},
    input:[],
    mode: '',},...data}
  });
  const handleKeyup = React.useCallback((key,value)=>{
    setPostStr((prev)=>{
      const newData = prev;
      newData.replace[key] = value;
      return newData;
    })
  },[postStr]);
  const handleClick = React.useCallback((e)=>{
    mailPop(postStr);
  },[postStr]);
  return (
    <div>
      <div class="p-2 bg-white rounded-lg">
        <div class="text-lg">{title}</div>
        <div>
          <div class="flex flex-col py-2 space-y-2 w-full">
            {postStr.input && postStr.input.map((item,index)=>{
              if(item.key){
                switch(item.mode.toLowerCase()){
                  case 'text':
                  case 'textbox':
                    return (<div class="flex flex-row">
                      <div class="w-40">{item.key}</div>
                      <div class="w-full border rounded-lg">
                        <input
                          class="w-full px-4"
                          placeholder={item.key}
                          type="text"
                          onKeyUp={(e)=>handleKeyup(item.key,e.target.value)}
                          value={postStr.replace[item.key]}
                        />
                      </div>
                    </div>)
                    break;
                  case 'select':
                    return (<div class="flex flex-row">
                      <div class="w-40">{item.key}</div>
                      <div class="w-full border rounded-lg">
                        <select class="w-full px-4" onChange={(e)=>handleKeyup(item.key,e.target.value)} placeholder={item.key} value={postStr.replace[item.key]}>
                          {
                            item.list && item.list.map((value)=>{
                              return (<option value={value}>{value}</option>)
                            })
                          }
                        </select>
                      </div>
                    </div>)
                    break;
                  case 'textarea':
                    return (<div class="flex flex-row">
                      <div class="w-40">{item.key}</div>
                      <div class="w-full border rounded-lg">
                        <textarea
                          class="w-full px-4"
                          placeholder={item.key}
                          onKeyUp={(e)=>handleKeyup(item.key,e.target.value)}
                          value={postStr.replace[item.key]}
                        ></textarea>
                      </div>
                    </div>)
                    break;
                }
              }else{
                return (<div class="flex flex-row">
                  <div class="w-40">{item}</div>
                  <div class="w-full border rounded-lg">
                    <input
                        class="w-full px-4"
                        placeholder={item}
                        type="text"
                        onKeyUp={(e)=>handleKeyup(item,e.target.value)}
                        value={postStr.replace[item]}
                      />
                  </div>
                </div>)
              }
            })}
        </div>
        <div>
          <button
            class="
              w-full
              border border-gray-200
              bg-gray-400
              w-40
              px-4
              py-1
              rounded-lg
            "
            onClick={handleClick}
          >
            メール
          </button>
        </div>
      </div>
    </div>
  </div>
  )
};

const SelectMode = (props) => {
  let { items } = props;
  console.log(items);
  return (
    <div class='flex flex-col space-y-2'>
      <div class='flex flex-row py-4'>
        <div class='w-40'>メールソフト</div>
        <div class='w-full border rounded-lg'>
          <select class='w-full px-4' id='mode'>
            <option value='' selected>
              デフォルト
            </option>
            <option value='gmail'>gmail</option>
            <option value='outlook'>outlook</option>
          </select>
        </div>
      </div>
      <div class="flex flex-col space-y-2">
        {items && items.map(item=>{
          return (<BaseItem title={item.name} data={item} />)
        })}
      </div>
    </div>
  );
};
const App = (props) => {
  let { data } = props;
  return (
    <div>
      <div>test</div>
      <SelectMode items={data} />
    </div>
  );
};
