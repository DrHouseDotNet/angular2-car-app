using System.Collections.Generic;
using System.Linq;
using CarApp.Api.models;
using Microsoft.AspNet.Cors;
using Microsoft.AspNet.Mvc;
using Microsoft.Data.Entity;

namespace CarApp.Api.Controllers
{
    [EnableCors("EveryOne")]
    [Route("api/cars")]
    public class CarController : Controller
    {
        private static DbContextOptionsBuilder<Context> _context;
        public CarController()
        {
            _context = new DbContextOptionsBuilder<Context>();
            _context.UseInMemoryDatabase();
        }

        [HttpGet]
        public List<models.Car> Get()
        {
            using (var context = new Context(_context.Options))
            {
                return context.Car.Include(x => x.Brand).ToList();
            }
        }

        [HttpGet("{id}")]
        public Car Get(int id)
        {
            using (var context = new Context(_context.Options))
            {
                return context.Car.Include(x => x.Brand).First(x => x.Id == id);
            }
        }

        [HttpPost]
        public void Post([FromBody]Car value)
        {
            using (var context = new Context(_context.Options))
            {
                var car = context.Car.First(x => x.Id == value.Id);
                car.Name = value.Name;
                context.SaveChanges();
            }
        }

        [HttpPut("{id}")]
        public void Put(int id, [FromBody]Car value)
        {
            using (var context = new Context(_context.Options))
            {
                var car = context.Car.First(x => x.Id == id);
                car.Name = value.Name;
                context.SaveChanges();
            }
        }

        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            using (var context = new Context(_context.Options))
            {
                var car = context.Car.First(x => x.Id == id);
                context.Car.Remove(car);
                context.SaveChanges();
            }
        }
    }
}
