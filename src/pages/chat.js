import Private from '@/private/private.route';

function chat(props) {





  return (
    <Private>
      <div>

        this is chat page with soket   io <br />

        <input onChange={(e) => setMessage(e.target.value)} type="text" name='message' placeholder='massage...' />
        <button > Send </button>

      </div>
    </Private>
  );
}

export default chat;