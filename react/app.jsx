const baseItem = (props) => {
  let { title } = props;
  return (
    <div>
      <div class="p-2 bg-white rounded-lg">
        <div class="text-lg">{name}</div>
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
            onclick="temp0();"
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
          return (<baseItem title={item.name} />)
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
