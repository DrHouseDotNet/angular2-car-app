using Newtonsoft.Json;

namespace CarApp.Api.models
{
    public class Brand
    {
        public int Id { get; set; }
        public string Name { get; set; }
        [JsonIgnore]
        public Car Car { get; set; }
    }
}
