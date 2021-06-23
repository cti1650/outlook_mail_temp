const SelectMode = (props) => {
  return (
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
  );
};
const App = (props) => {
  return (
    <div>
      <div>test</div>
      <SelectMode />
    </div>
  );
};
