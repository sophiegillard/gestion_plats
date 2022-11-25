export const Create = () => {
    return (
        <div>
        <h1>Create user</h1>
        <form >
            <table cellSpacing="10">
                <tbody>
                    <tr>
                        <th>
                            <label>Name: </label>
                        </th>
                        <td>
                            <input type="text" name="name"  />
                        </td>
                    </tr>
                    <tr>
                        <th>
                            <label>Email: </label>
                        </th>
                        <td> 
                            <input type="text" name="email" />
                        </td>
                    </tr>
                    <tr>
                        <th>
                            <label>Mobile: </label>
                        </th>
                        <td>
                            <input type="text" name="mobile" />
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="2" align ="right">
                            <button>Save</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </form>
    </div>
    );
}