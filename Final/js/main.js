function main()
{
    var volume = new KVS.LobsterData();
    var screen = new KVS.THREEScreen();

    screen.init( volume, {
        width: window.innerWidth * 0.768,
        height: window.innerHeight,
        targetDom: document.getElementById('display'),
        enableAutoResize: false
    });

    var bounds = Bounds( volume );
    screen.scene.add( bounds );

    var isovalue = 128;
    var obj = document.getElementById("id_textBox1");
    color = obj.value.replace( /#/g , "0x" );
    var material_num = 1;
    var surfaces = Isosurfaces( volume, isovalue, color, material_num );
    screen.scene.add( surfaces );

    var directionalLight;
    directionalLight = new THREE.DirectionalLight(0xFFFFFF, 0.3);
    directionalLight.position.set(0, 0, 40);
    screen.scene.add( directionalLight );

    var axis = new THREE.AxisHelper(200);
    screen.scene.add(axis);
    axis.position.set(0, 0, 0);

    document.addEventListener( 'mousemove', function() {
        screen.light.position.copy( screen.camera.position );
    });

    window.addEventListener('resize', function() {
        screen.resize( [ window.innerWidth, window.innerHeight ] );
    });

    // change color
    var btn1 = document.getElementById('colorbuttun');
    btn1.addEventListener('click', function(e){
        screen.scene.remove(surfaces);
        obj = document.getElementById("id_textBox1");
        color = obj.value.replace( /#/g , "0x" );
        surfaces = Isosurfaces( volume, isovalue, color, material_num );
        screen.scene.add( surfaces );
    });

    var btn2 = document.getElementById('range01');
    btn2.addEventListener('change', function(e){
        screen.scene.remove(surfaces);
        isovalue = document.getElementById("range01").value;
        surfaces = Isosurfaces( volume, isovalue, color, material_num );
        screen.scene.add( surfaces );
    });

    var btn3 = document.getElementById('material');
    btn3.addEventListener('change', function(e){
        screen.scene.remove(surfaces);
        check1 = document.form2.material1.checked;
        check2 = document.form2.material2.checked;
        if(check1==true){
            material_num = 1;
        }else if(check2 == true){
            material_num = 2;
        }
        surfaces = Isosurfaces( volume, isovalue, color, material_num );
        screen.scene.add( surfaces );
    });

    var btn4 = document.getElementById('light');
    btn4.addEventListener('change', function(e){
        check1 = document.form3.light1.checked;
        check2 = document.form3.light2.checked;
        if(check1==true){
            screen.scene.add( directionalLight );
        }else if(check2 == true){
            screen.scene.remove( directionalLight );
        }
    });

    var btn5 = document.getElementById('lightcolorbuttun');
    btn5.addEventListener('click', function(e){
        check1 = document.form3.light1.checked;
        if(check1==true){
            screen.scene.remove( directionalLight );
        }
        obj = document.getElementById("id_textBox2");
        color = obj.value.replace( /#/g , "0x" );
        directionalLight = new THREE.DirectionalLight(color, 0.3);
        directionalLight.position.set(0, 0, 40);
        if(check1==true){
            screen.scene.add( directionalLight );
        }
    });


    screen.loop();
}

