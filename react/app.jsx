
const BaseItem = (props) => {
  let { title,data } = props;
  return (
    <div>
      <div class="p-2 bg-white rounded-lg">
        <div class="text-lg">{title}</div>
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
            onClick={e=>{
              mailPop(data);
            }}
          >
            メール
          </button>
        </div>
      </div>
    </div>
  )
};
const BaseInputItem = (props) => {
  let { title,data } = props;
  const {postData,setPostData} = useState(data);
  return (
    <div>
      <div class="p-2 bg-white rounded-lg">
        <div class="text-lg">{title}</div>
        <div>
          <div class="flex flex-col py-2 space-y-2 w-full">
            {data.input && postData.input.map((item,index)=>{
              if(Array.isArray(item)){
                switch(item.mode.toLowerCase()){
                  case 'text':
                  case 'textbox':
                    return (<div class="flex flex-row">
                      <div class="w-40">{item.key}</div>
                      <div class="w-full border rounded-lg">
                        <input
                          class="w-full px-4"
                          id="val2"
                          placeholder={item.key}
                          type="text"
                          value={postData.replace[item.key]}
                        />
                      </div>
                    </div>)
                    break;
                  case 'select':
                    return (<div class="flex flex-row">
                      <div class="w-40">{item.key}</div>
                      <div class="w-full border rounded-lg">
                        <select class="w-full px-4" id="val1" value={postData.replace[item.key]}>
                          <option value=""></option>
                          <option value="現場調査" selected>現場調査</option>
                          <option value="お見積り">お見積り</option>
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
                          id="val3"
                          placeholder={item.key}
                          value={postData.replace[item.key]}
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
                        id="val2"
                        placeholder={item}
                        type="text"
                        value={postData.replace[item]}
                      />
                  </div>
                </div>)
              }
            })}
          </div>
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
            onClick={e=>{
              mailPop(data);
            }}
          >
            メール
          </button>
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
          return (<BaseInputItem title={item.name} data={item} />)
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
